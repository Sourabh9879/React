import React from 'react';
import { useState } from 'react';



export function App(props) {

  let [color,setColor] = useState("Olive");

  return (
    <div className='App' style={{backgroundColor:color}}>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
    </div>
  );
}

// Log to console
console.log('Hello console')