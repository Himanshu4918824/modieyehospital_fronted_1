import React, { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function AnteriorIcon() {
  const leftcanvasRef = useRef(null);
  const rightcanvasRef = useRef(null);

  // Helper to combine background and drawing
  const mergeImages = async (bgSrc, sketchDataUrl, width, height) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      const bgImg = new window.Image();
      const sketchImg = new window.Image();

      let loaded = 0;

      const checkLoaded = () => {
        loaded++;

        if (loaded === 2)
        {
          ctx.drawImage(bgImg, 0, 0, width, height);
          ctx.drawImage(sketchImg, 0, 0, width, height);
          resolve(canvas.toDataURL("image/png"));
        }
      };

      bgImg.onload = checkLoaded;
      sketchImg.onload = checkLoaded;

      bgImg.src = bgSrc;
      sketchImg.src = sketchDataUrl;
    });
  };



  const handleSave = async (side) => {
    const width = 320, height = 320;
    let sketchDataUrl, bgSrc;

    if (side === "left")
        {
           sketchDataUrl = await leftcanvasRef.current.exportImage("png");
           bgSrc = "/images/lefteyeretinal.jpg";
        } 

    else 
        {
           sketchDataUrl = await rightcanvasRef.current.exportImage("png");
           bgSrc = "/images/righteyeretinal.jpg";
         }

    const merged = await mergeImages(bgSrc, sketchDataUrl, width, height);
    console.log(`${side} merged image:`, merged);
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: 780, background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

        <div className="row">
          <div className="col-lg-6 col-xs-12">

           <div className="fs-4 fw-bold mb-2">Left Eye</div>
            <div style={{ position: "relative", width: 320, height: 320, marginLeft: 8 }}>
              <img src="/images/lefteyeretinal.jpg" alt="lefteye" style={{ width: 320, height: 320, position: "absolute", top: 0, left: 0, zIndex: 1 }} />
                <ReactSketchCanvas
                  ref={leftcanvasRef}
                  width="380px"
                  height="372px"
                  strokeWidth={3}
                  strokeColor="red"
                  backgroundImage="transparent"
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
              />
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button className="btn btn-primary" onClick={() => handleSave("left")}>Save Left</button>
              <button className="btn btn-secondary ms-2" onClick={() => leftcanvasRef.current.clearCanvas()}>Clear Left</button>
            </div>

          </div>



          <div className="col-lg-6 col-xs-12">
            <div className="fs-4 fw-bold mb-2">Right Eye</div>
            <div style={{ position: "relative", width: 320, height: 320, marginLeft:15}}>
              <img src="/images/righteyeretinal.jpg" alt="righteye" style={{ width: 320, height: 320, position: "absolute", top: 0, left: 0, zIndex: 1 }}/>
                <ReactSketchCanvas
                  ref={rightcanvasRef}
                  width="380px"
                  height="372px"
                  strokeWidth={3}
                  strokeColor="red"
                  backgroundImage="transparent"
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
                />
            </div>

            <div className="d-flex justify-content-center mt-5">
              <button className="btn btn-primary" onClick={() => handleSave("right")}>Save Right</button>
              <button className="btn btn-secondary ms-2" onClick={() => rightcanvasRef.current.clearCanvas()}>Clear Right</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}