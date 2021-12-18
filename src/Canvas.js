import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 256;
    canvas.height = 128;

    const imageData = context.createImageData(canvas.width, canvas.height);
    let [r,g,b]=[0,0,0];
    const step=8;
    // Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
      
      // Modify pixel data
      imageData.data[i + 0] = r + 1; // R value
      imageData.data[i + 1] = g + 1; // G value
      imageData.data[i + 2] = b + 1; // B value
      imageData.data[i + 3] = 255; // A value

      
      if (r<256) {
        r+=step;        
      }else{
        if (g<256) {
          g+=step;
        } else {
          if (b<256) {
            b+=step;
          } else {
            b=0;
          }
          g=0;
        }        
        r=0;
      }
    }

    console.log(imageData.data.length/4);
    context.putImageData(imageData, 0, 0);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
