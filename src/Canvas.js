import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Canvas = () => {
  const {setCanvas}=useGlobalContext();
  const canvasRef = useRef(null);
  
  useEffect(() => {    
    setCanvas(canvasRef.current);
  }, [setCanvas]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
