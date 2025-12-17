import { useRef, useState, useEffect, useContext } from "react";
import "./AnteriorIcon.css";
import { getData, postData } from "../../../services/FetchNodeAdminServices";
import MainContext from "../../../context/MainContext";
const PosteriorIcon = () => {
  const { P_id } = useContext(MainContext)

  useEffect(() => {
    loadDrawing()
  }, []);

  const canvasRef_Right = useRef(null);
  const canvasRef_Left = useRef(null);

  const ctxLeft = useRef(null);
  const ctxRight = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [activeCanvas, setActiveCanvas] = useState("left");

  const [pathsLeft, setPathsLeft] = useState([]);
  const [pathsRight, setPathsRight] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  // whether current stroke is an eraser stroke
  const [currentIsEraser, setCurrentIsEraser] = useState(false);

  const [lineColor, setLineColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(5);

  const [isEraser, setIsEraser] = useState(false);

  // cursor circle
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // helper to choose ctx
  const getCtx = (which = activeCanvas) =>
    which === "left" ? ctxLeft.current : ctxRight.current;

  // Initialize Left Canvas
  useEffect(() => {
    const canvas = canvasRef_Left.current;
    if (!canvas) return;
    canvas.width = 320;
    canvas.height = 320;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxLeft.current = ctx;

    // initial redraw
    redrawCanvas(pathsLeft, ctx, canvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only once

  // Initialize Right Canvas
  useEffect(() => {
    const canvas = canvasRef_Right.current;
    if (!canvas) return;
    canvas.width = 320;
    canvas.height = 320;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctxRight.current = ctx;

    // initial redraw
    redrawCanvas(pathsRight, ctx, canvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only once

  // Whenever paths change we must redraw the appropriate canvas
  useEffect(() => {
    const canvas = canvasRef_Left.current;
    const ctx = ctxLeft.current;
    if (canvas && ctx) redrawCanvas(pathsLeft, ctx, canvas);
  }, [pathsLeft]);

  useEffect(() => {
    const canvas = canvasRef_Right.current;
    const ctx = ctxRight.current;
    if (canvas && ctx) redrawCanvas(pathsRight, ctx, canvas);
  }, [pathsRight]);

  // Redraw: supports normal strokes and erase strokes (destination-out)
  const redrawCanvas = (paths, ctx, canvas) => {
    if (!ctx || !canvas) return;
    // clear entire canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // IMPORTANT: draw background image under everything (if you want the background image visible)
    // If you're using canvas background-image via CSS and want it visible underneath drawings,
    // you must not clear that CSS; destination-out will still cut pixels on canvas but background (CSS) remains visible beneath.
    // Here we only redraw strokes saved in `paths`.
    paths.forEach((path) => {
      ctx.beginPath();

      if (path.color === "erase") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = path.width;
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = path.color;
        ctx.lineWidth = path.width;
      }

      if (path.points && path.points.length > 0) {
        ctx.moveTo(path.points[0].x, path.points[0].y);
        path.points.forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.stroke();
      }
      ctx.closePath();
    });

    // reset
    ctx.globalCompositeOperation = "source-over";
  };

  // Start drawing (mousedown)
  const startDrawing = (e, which) => {
    setActiveCanvas(which);
    setIsDrawing(true);

    const canvas = (which === "left" ? canvasRef_Left.current : canvasRef_Right.current);
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = getCtx(which);

    // configure ctx for this stroke (erase or normal)
    if (isEraser) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = lineWidth * 2; // eraser size multiplier
      // strokeStyle doesn't matter for destination-out but set to opaque
      ctx.strokeStyle = "rgba(0,0,0,1)";
      setCurrentIsEraser(true);
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      setCurrentIsEraser(false);
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
    // start accumulating points for this stroke (will include eraser strokes too)
    setCurrentPath([{ x, y }]);
  };

  // Drawing (mousemove)
  const draw = (e) => {
    if (!isDrawing) return;

    const canvas =
      activeCanvas === "left" ? canvasRef_Left.current : canvasRef_Right.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = getCtx(activeCanvas);
    if (!ctx) return;

    ctx.lineTo(x, y);
    ctx.stroke();

    // track cursor for circle cursor
    setCursorPos({ x: e.clientX, y: e.clientY });

    // accumulate points
    setCurrentPath((prev) => [...prev, { x, y }]);
  };

  // Stop drawing (mouseup / mouseleave)
  const stopDrawing = () => {
    if (!isDrawing) return;

    const ctx = getCtx(activeCanvas);
    if (ctx) ctx.closePath();
    setIsDrawing(false);

    // Save stroke regardless of eraser or pen — this ensures eraser persists on redraw
    const newStroke = {
      color: currentIsEraser ? "erase" : lineColor,
      width: currentIsEraser ? lineWidth * 2 : lineWidth,
      points: currentPath,
    };

    if (activeCanvas === "left") {
      setPathsLeft((prev) => [...prev, newStroke]);
    } else {
      setPathsRight((prev) => [...prev, newStroke]);
    }

    // reset current path
    setCurrentPath([]);
    setCurrentIsEraser(false);
    // ensure compositeMode reset
    const currentCtx = getCtx(activeCanvas);
    if (currentCtx) currentCtx.globalCompositeOperation = "source-over";
  };

  // Save to server
  const saveDrawing = async () => {
    try {
      await postData(`patient/v1/Clinical/posteriorDrawing/${P_id}`, {
        left: pathsLeft,
        right: pathsRight,
      });
      alert("Saved!");
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  // Load from server
  const loadDrawing = async () => {
    try {
      const res = await getData(`patient/v1/Clinical/posteriorDrawing/${P_id}`);
      setPathsLeft(res.Posterior_Drawing.left || []);
      setPathsRight(res.Posterior_Drawing.right || []);
      // redraw will be triggered by useEffect watchers
      // alert("Loaded!");
    } catch (err) {
      console.error(err);
      alert("Load failed");
    }
  };

  // helper to change color and disable eraser
  const changeStrokeColor = (color) => {
    setIsEraser(false);
    setLineColor(color);
  };

  return (
    <div className="main-wrapper">
      <div className="toolbox">
        <button onClick={() => changeStrokeColor("red")} className="btn btn-danger btn-sm">Red</button>
        <button onClick={() => changeStrokeColor("blue")} className="btn btn-primary btn-sm">Blue</button>
        <button onClick={() => changeStrokeColor("green")} className="btn btn-success btn-sm">Green</button>
        <button onClick={() => changeStrokeColor("yellow")} className="btn btn-warning btn-sm">Yellow</button>
        <button onClick={() => changeStrokeColor("black")} className="btn btn-dark btn-sm">Black</button>

        <label style={{ marginLeft: 12, marginRight: 6 }}>Brush:</label>
        <input
          type="range"
          min="1"
          max="40"
          value={lineWidth}
          onChange={(e) => setLineWidth(parseInt(e.target.value))}
        />

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setIsEraser((prev) => !prev)}
          style={{ marginLeft: 12 }}
        >
          {isEraser ? "Disable Eraser" : "Eraser"}
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <button className="btn btn-success me-2" onClick={saveDrawing}>Save</button>
        <button className="btn btn-info" onClick={loadDrawing}>Load</button>
      </div>

      <div className="row mt-3">
        {/* LEFT */}
        <div className="col">
          <h5>Left Eye</h5>
          <div className="canvas-box" style={{ position: "relative", width: 340 }}>
            <canvas
              ref={canvasRef_Left}
              width={320}
              height={320}
              onMouseDown={(e) => startDrawing(e, "left")}
              onMouseMove={(e) => {
                draw(e);
                setCursorPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className={isEraser ? "canvas-eraser" : ""}
              style={{
                backgroundImage: "url('/images/lefteyeretinal.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid #333",
              }}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col">
          <h5>Right Eye</h5>
          <div className="canvas-box" style={{ position: "relative", width: 340 }}>
            <canvas
              ref={canvasRef_Right}
              width={320}
              height={320}
              onMouseDown={(e) => startDrawing(e, "right")}
              onMouseMove={(e) => {
                draw(e);
                setCursorPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className={isEraser ? "canvas-eraser" : ""}
              style={{
                backgroundImage: "url('/images/righteyeretinal.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "2px solid #333",
              }}
            />
          </div>
        </div>
      </div>

      {/* CIRCLE CURSOR */}
      {isEraser && (
        <div
          className="cursor-circle"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            width: lineWidth * 2,
            height: lineWidth * 2,
          }}
        />
      )}
    </div>
  );
};

export default PosteriorIcon;
