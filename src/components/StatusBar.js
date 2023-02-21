import React from "react";

function StatusBar({ round, streak, winCount }) {
  return (
    <div className="statusBar">
      <span>Round: {round}</span>
      <span>Win: {winCount}</span>
      <span>Streak: {streak}</span>
    </div>
  );
}

export default StatusBar;
