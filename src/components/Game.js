import React from "react";
import Answer from "./Answer";

function Game(answer) {
  return (
    <div className="game-wrapper">
      <div className="graphic"></div>
      <div className="answer-wrapper">{<Answer answer={answer.answer} />}</div>
    </div>
  );
}

export default Game;
