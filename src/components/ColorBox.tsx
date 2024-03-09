// import React, { useRef, useState } from 'react';

// function ColorBox() {
//   const [color, setColor] = useState('#ff0000');

//   const takeCol = () => {
//     return (
//       <input
//         type="color"
//         value={color}
//         onChange={(e) => setColor(e.target.value)}
//       />
//     );
//   };
// function ColorBox() {
  // import React, { useState, useRef } from 'react';

  // import React, { useState, useRef } from 'react';

  // import React, { useState, useRef } from 'react';

  // import React, { useState, useRef } from 'react';

  // function ColorBox() {
  //   const [color, setColor] = useState('#ff0000');
  //   const inputRef = useRef<HTMLInputElement | null>(null);
  
  //   const handleClick = () => {
  //     if (inputRef.current) {
  //       inputRef.current.click();
  //     }
  //   };
  
  //   return (
  //     <div>
  //       <div
  //         onClick={handleClick}
  //         style={{
  //           backgroundColor: color,
  //           width: '25px',
  //           height: '25px',
  //           borderRadius: '5px', // This will round the corners
  //         }}
  //       />
  //       <input
  //         ref={inputRef}
  //         type="color"
  //         value={color}
  //         onChange={(e) => setColor(e.target.value)}
  //         style={{ display: 'none' }}
  //       />
  //     </div>
  //   );
  // }
  
  // export default ColorBox;
  
  
  
  

//   return (
//     <div>
//       <div
//         style={{
//           backgroundColor: color,
//           width: '20px',
//           height: '20px',
//         }}
//       />
//       {takeCol()}
//     </div>
//   );
// }

// export default ColorBox;





import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorBox() {
  const [color, setColor] = useState('#ff0000');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: { hex: React.SetStateAction<string>; }) => {
    setColor(color.hex);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={handleClick}
        style={{
          backgroundColor: color,
          width: '25px',
          height: '25px',
          borderRadius: '5px',
        }}
      />
      {displayColorPicker ? (
        <div style={{ position: 'absolute', zIndex: '2', left: '30px' }}>
          <div
            style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
            onClick={handleClose}
          />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default ColorBox;

