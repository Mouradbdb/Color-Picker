import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const handelColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-12 text-3xl font-black">Color Picker</h1>
      <div className="w-72 h-72 flex justify-center items-center border rounded-3xl mb-6 shadow-md" style={{ backgroundColor: color }}>
        <p className="text-white text-3xl text-center">Selected Color : {color}</p>
      </div>
      <label className="text-2xl font-bold mb-3">Select Color</label>
      <input type="color" value={color} onChange={handelColorChange} className="w-20 h-14 p-2 rounded-xl border-2 border-rose-500"/>
    </div>
  );
}
export default ColorPicker;
