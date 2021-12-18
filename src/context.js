import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const getRandomWidth = () => {
  const map = {
    0: 64,
    1: 128,
    2: 256,
  };
  const index = Math.floor(Math.random() * 3);

  return map[index];
};

const updateRGBValues = (r,g,b) =>{
  const step = 8;
  if (r < 256) {
    r += step;
  } else {
    if (g < 256) {
      g += step;
    } else {
      if (b < 256) {
        b += step;
      } else {
        b = 0;
      }
      g = 0;
    }
    r = 0;
  }
  return {r,g,b};
}

const AppProvider = ({ children }) => {
  const [canvas, setCanvas] = useState(null);

  const drawImage = () => {
    const context = canvas.getContext("2d");

    //random width and height
    canvas.width = getRandomWidth();
    canvas.height = 32768 / canvas.width;

    const imageData = context.createImageData(canvas.width, canvas.height);

    let colours = {r:0,g:0,b:0};    

    // Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
      // Modify pixel data
      imageData.data[i + 0] = colours.r + 1; // R value
      imageData.data[i + 1] = colours.g + 1; // G value
      imageData.data[i + 2] = colours.b + 1; // B value
      imageData.data[i + 3] = 255; // A value

      // update RGB values
      colours = updateRGBValues(colours.r,colours.g,colours.b);
    }

    console.log(imageData.data.length / 4);
    console.log(`size is ${canvas.width} * ${canvas.height}`);
    context.putImageData(imageData, 0, 0);
  };

  return (
    <AppContext.Provider value={{setCanvas, drawImage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
