import React from "react";

function Description({ changeMode }) {
  function handleClick() {
    changeMode();
  }
  return (
    <>
      <div className="description">
        Welcome to Hangman, a game where players try to solve the hidden word by
        guessing what letters it contains. You win if you can get the answer
        with {"<"}7 mistakes.
      </div>
      <div className="btn-wrapper">
        <button onClick={handleClick} className="btn-start">
          Start Playing
        </button>
      </div>
    </>
  );
}

export default Description;
