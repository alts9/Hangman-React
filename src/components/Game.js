import React from "react";
import Answer from "./Answer";
import "../css/Game.css";
import Graphic from "./Graphic";
import Keyboard from "./Keyboard";
import StatusBar from "./StatusBar";

function Game({ guess, lives, testChar, reset, round, streak, winCount }) {
  return (
    <>
      <StatusBar round={round} streak={streak} winCount={winCount} />
      <div className="game-wrapper">
        <div className="graphic">
          <Graphic lives={lives} reset={reset} />
        </div>
        <div className="answer-wrapper">{<Answer guess={guess} />}</div>
      </div>
      <Keyboard testChar={testChar} reset={reset} />
    </>
  );
}

export default Game;
