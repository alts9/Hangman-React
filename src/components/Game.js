import React from "react";
import Answer from "./Answer";
import "../css/Game.css";
import Graphic from "./Graphic";

function Game({ guess, lives }) {
  return (
    <div className="game-wrapper">
      <div className="graphic">
        <Graphic lives={lives} />
      </div>
      <div className="answer-wrapper">{<Answer guess={guess} />}</div>
    </div>
  );
}

export default Game;
