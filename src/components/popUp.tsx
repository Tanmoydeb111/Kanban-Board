import React from 'react';
import Popup from 'reactjs-popup';

function App() {
  return (
    <div>
      <Popup trigger={<button>Show Popup</button>} position="top right">
        <div>Popup Content</div>
      </Popup>
    </div>
  );
}

export default App;
