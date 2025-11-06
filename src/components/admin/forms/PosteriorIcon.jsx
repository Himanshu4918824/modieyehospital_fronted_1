 import React, { useRef, useState } from "react";
import { Canvas, ReactSketchCanvas } from "react-sketch-canvas";

export default function PosteriorIcon()
{
    const leftcanvasRef = useRef(null);
    const rightcanvasRef = useRef(null);

    const [strokeColor,setStrokeColor]=useState('red');



    const changeStrokeColor=(color)=> {

      setStrokeColor(color)
  
  }



    return(<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 780, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10, overflow:'auto' }}>
<div style={{maxHeight:450}}>
       <div className="d-flex flex-wrap mb-3">
        <button onClick={()=>changeStrokeColor('red')} className="btn btn-danger btn-sm m-1">Red</button>
        <button onClick={()=>changeStrokeColor('blue')} className="btn btn-primary btn-sm m-1">Blue</button>
        <button onClick={()=>changeStrokeColor('green')} className="btn btn-success btn-sm m-1">Green</button>
        <button onClick={()=>changeStrokeColor('yellow')} className="btn btn-warning btn-sm m-1">Yellow</button>
        <button onClick={()=>changeStrokeColor('black')} className="btn btn-dark btn-sm m-1">Black</button> 
          
        <button onClick={()=>{leftcanvasRef.current.undo()}} className="btn btn-dark btn-sm m-1">Left Undo</button>   
        <button onClick={()=>{rightcanvasRef.current.undo()}} className="btn btn-dark btn-sm m-1">Right Undo</button> 
          
      </div>

        <div className="row">
            <div className="col-lg-6 col-xs-12">
                <div className="fs-4 fw-bold mb-2">Left Eye</div>
                
                <div style={{ position: "relative" ,marginLeft:10}}>
                    <img src="/images/lefteyeretinal.jpg" alt="lefteye" style={{ width: 320,zIndex:1}}/>
                      <ReactSketchCanvas
                        ref={leftcanvasRef}
                        width="375px"
                        height="365px"
                        strokeWidth={2}
                        strokeColor={strokeColor}
                        backgroundImage="transparent"
                        style={{ position: "absolute", top: 0, left: 0, zIndex:2 }}
                     />
                </div>
            </div>

            <div className="col-lg-6 col-xs-12">
                <div className="fs-4 fw-bold mb-2">Right Eye</div>
                
                <div style={{ position: "relative", marginLeft:18 }}>
                    <img src="/images/righteyeretinal.jpg" alt="lefteye" style={{width:320}}/>
                     <ReactSketchCanvas
                        ref={rightcanvasRef}
                        width="375px"
                        height="365px"
                        strokeWidth={2}
                        strokeColor={strokeColor}
                        
                        backgroundImage="transparent"
                        style={{ position: "absolute", top: 0, left: 0 }}
                     />
                </div>
            </div>

        </div>

        
         <div className="row mb-2 mt-5">
        <div className="col-6 d-flex justify-content-center">
          <button
          className="btn btn-primary"
           onClick={async () => {
                    const leftImage = await leftcanvasRef.current.exportImage("png");
                    const rightImage = await rightcanvasRef.current.exportImage("png");
                    console.log("Left Image:", leftImage);
                    console.log("Right Image:", rightImage);
          }}
      >
        Save
      </button>
        </div>

        <div className="col-6 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={() => leftcanvasRef.current.clearCanvas() || rightcanvasRef.current.clearCanvas()}>Clear</button>
        </div>

      </div>

</div>
    </div>
    </div>)
}



{/*

   
import imageFile from "./your-image.jpg";

const PaintApp = () => {
  const canvasRef = useRef(null);

  return (
    <div>
      <h2>Paint on Image</h2>
      <div style={{ position: "relative" }}>
        <img
          src={imageFile}
          alt="background"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <ReactSketchCanvas
          ref={canvasRef}
          width="500px"
          height="500px"
          strokeWidth={5}
          strokeColor="red"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </div>
      <button
        onClick={async () => {
          const dataUrl = await canvasRef.current.exportImage("png");
          console.log(dataUrl); // export image as base64
        }}
      >
        Save
      </button>
    </div>
  );
};

export default PaintApp;

    
    */ }