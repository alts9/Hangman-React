import React from "react";
import Answer from "./Answer";
import "../css/Game.css";
import Graphic from "./Graphic";
import Keyboard from "./Keyboard";

function Game({ guess, lives, testChar }) {
  return (
    <>
      {" "}
      <div className="game-wrapper">
        <div className="graphic">
          <Graphic lives={lives} />
        </div>
        <div className="answer-wrapper">{<Answer guess={guess} />}</div>
      </div>
      <Keyboard testChar={testChar} />
    </>
  );
}

export default Game;
