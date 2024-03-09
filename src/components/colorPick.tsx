// ColorPicker.js

import React, { useState } from 'react';
import { ChromePicker } from 'react-color'; // Import the color picker component

function ColorPicker() {
  const [color, setColor] = useState('#ffffff'); // Initial color (white)

  const handleColorChange = (newColor: { hex: React.SetStateAction<string>; }) => {
    setColor(newColor.hex); // Update the color state
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <ChromePicker color={color} onChange={handleColorChange} />
      <p>Selected color: {color}</p>
    </div>
  );
}

export default ColorPicker;
