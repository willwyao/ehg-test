import React from "react";
import { useGlobalContext } from "./context";

const Header = () => {
  const { drawImage } = useGlobalContext();
  return (
    <header className="mb-4">
      <h1>Image Generator</h1>
      <div>
        <p>Click the button to draw a random size image.</p>
        <button className="btn btn-primary" onClick={() => drawImage()}>
          Draw
        </button>
      </div>
    </header>
  );
};

export default Header;
