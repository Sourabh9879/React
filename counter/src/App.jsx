import React from 'react';
import { useState } from 'react';
export function App(props) {


  const [counter, setCounter] = useState(10)


  const addVal = () => {
    if(counter < 20){
    setCounter(counter + 1)
    }
  }

   const removeVal = () => {
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  const add = () => {
    
  }
  return (
    <div className='App'>
      <h1>Counter : {counter}</h1>
      <button onClick={addVal}>Add value :{counter}</button>
      <br></br>
      <button onClick={removeVal}>Dec value: {counter}</button>
    </div>
  );
}

// Log to console
console.log('Hello console')