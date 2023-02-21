import React from "react";

function Result({ answer, winRound, round, streak, totalWin }) {
  return (
    <div className="result-wrapper">
      <div className="result">
        {winRound ? "Congrats, you win.." : "Sorry, you lose.."}
      </div>
      <div className="answer">
        <span>Answer:</span> <span>{answer}</span>
      </div>
      <div className="record">
        <div className="win">
          <span>
            Win: {totalWin}/{round}
          </span>
        </div>
        <div className="streak">
          <span>Streak: {streak} </span>
        </div>
      </div>
      <button className="btn btn-next">Next Round</button>
    </div>
  );
}

export default Result;
