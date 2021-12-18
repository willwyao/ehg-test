import React from 'react';
import Canvas from './Canvas';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Canvas id="canvas" />
    </div>
  );
}

export default App;
