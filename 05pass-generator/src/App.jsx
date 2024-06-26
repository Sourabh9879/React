import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";

export default function App() {
  const [len, setLen] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numbers, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (charAllow) str += "!@#$%^&*";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [len, charAllow, numbers]);

  const passRef = useRef(null);
  const copyPass = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },
          [password])
  useEffect(() => {
    passGen();
  }, [len,charAllow,numbers,passGen]);

  return (
    <>
      <input type="text" value={password} placeholder="password" ref={passRef}/>
      <br /><br />
      <button
      onClick={copyPass}
        >Copy</button>
      <br />
      <br />
      <input type="range" 
        min="8" 
        max="16" 
        value={len}
        onChange={(e) => {
          setLen(e.target.value)
        }}
        />
        length:{len}
      <br /><br />
      <input
        type="checkbox"
        defaultChecked={charAllow}
      onChange={() => {
        setCharAllow((prev) => !prev);
      }}
      />
      character
      <br /><br />
      <input
        type="checkbox"
        defaultChecked={numbers}
        onChange={() => {setNumber((prev) => !prev);
        }}
      />
      numbers
    </>
    )
  }