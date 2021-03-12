import "./App.css";
import { SketchPicker } from "react-color";
import React, { useState } from "react";

function App() {
  const defaultColor = "#000";
  const [color, updateColor] = useState(defaultColor);
  const [demoText, updateDemoText] = useState("");

  const handleOnChangeComplete = (color) => {
    updateColor(color.hex);
  };

  const handleDemoText = (e) => {
    console.log(e.target.value);
    updateDemoText(e.target.value);
  };

  const rectStyle = {
    fill: color,
  };

  const textStyle = {
    fill: "#fff",
    fontSize: "14",
    fontFamily: "Verdana",
  };

  return (
    <div>
      <div className="demo-text">
        <label htmlFor="demo-text">Demo Text:</label>
        <input
          type="text"
          id="demo-text"
          name="demo-text"
          onChange={handleDemoText}
        ></input>
      </div>
      <SketchPicker color={color} onChangeComplete={handleOnChangeComplete} />
      <svg xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="0" y="0" width="1000" height="1000" style={rectStyle}></rect>
          <text x="2" y="20" style={textStyle}>
            {demoText}
          </text>
        </g>
      </svg>
    </div>
  );
}

export default App;
