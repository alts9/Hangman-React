import React from "react";
import "../css/Keyboard.css";
import Letter from "./Letter";

function Keyboard() {
  const alphabet = [[..."QWERTYUIOP"], [..."ASDFGHJKL"], [..."ZXCVBNM"]];
  return (
    <>
      <div className="keyboard-row">
        {alphabet[0].map((letter) => {
          return <Letter key={letter} letter={letter} />;
        })}
      </div>
      <div className="keyboard-row">
        {alphabet[1].map((letter) => {
          return <Letter key={letter} letter={letter} />;
        })}
      </div>
      <div className="keyboard-row">
        {alphabet[2].map((letter) => {
          return <Letter key={letter} letter={letter} />;
        })}
      </div>
    </>
  );
}

export default Keyboard;
