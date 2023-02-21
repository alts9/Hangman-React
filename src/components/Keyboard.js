import React, { useEffect } from "react";
import "../css/Keyboard.css";
import Letter from "./Letter";

function Keyboard({ testChar, reset }) {
  function resetKeyboard() {
    const usedLetter = document.querySelectorAll(".included");
    const notUsedLetter = document.querySelectorAll(".not-included");
    const letterArray = [...usedLetter, ...notUsedLetter];
    letterArray.forEach((letter) => {
      letter.classList.remove("included");
      letter.classList.remove("not-included");
    });
  }
  useEffect(() => resetKeyboard(), [reset]);

  const alphabet = [[..."QWERTYUIOP"], [..."ASDFGHJKL"], [..."ZXCVBNM"]];
  return (
    <>
      <div className="keyboard-row">
        {alphabet[0].map((letter) => {
          return (
            <Letter
              key={letter}
              letter={letter}
              testChar={testChar}
              reset={reset}
            />
          );
        })}
      </div>
      <div className="keyboard-row">
        {alphabet[1].map((letter) => {
          return (
            <Letter
              key={letter}
              letter={letter}
              testChar={testChar}
              reset={reset}
            />
          );
        })}
      </div>
      <div className="keyboard-row">
        {alphabet[2].map((letter) => {
          return (
            <Letter
              key={letter}
              letter={letter}
              testChar={testChar}
              reset={reset}
            />
          );
        })}
      </div>
    </>
  );
}

export default Keyboard;
