import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Game from "./components/Game";
import Result from "./components/Result";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  const answer = [..."DOCOMO"];
  const [guess, setGuess] = useState([]);
  const [gameMode, setMode] = useState("game");
  const [disableInput, setInput] = useState(true);
  const [winRound, setWin] = useState(false);
  const [lives, setLives] = useState(7);
  const [reset, setReset] = useState(false);
  //temporary parameter for result component
  const round = 5;
  const totalWin = 3;
  const streak = 2;

  function createEmptyGuess() {
    const newGuess = answer.map((char) => {
      return (char = "_");
    });
    setGuess(newGuess);
  }

  function changeMode(mode) {
    const newMode = mode;
    setMode(newMode);
  }

  useEffect(() => {
    createEmptyGuess();
  }, []);

  function replaceCorrectGuess(guessChar) {
    const charIndex = answer.reduce((arr, ansChar, i) => {
      if (ansChar === guessChar) arr.push(i);
      return arr;
    }, []);
    const newGuess = guess.map((char, index) => {
      return charIndex.includes(index) ? guessChar : char;
    });
    setGuess(newGuess);
    checkWin(newGuess);
  }

  function testChar(char) {
    //if game ends, disable input
    if (disableInput) {
      if (answer.includes(char)) {
        replaceCorrectGuess(char);
        return true;
      } else {
        const newLives = lives - 1;
        checkLose(newLives);
        setLives(newLives);
        return false;
      }
    }
    return null;
  }

  function checkWin(newGuess) {
    if (!newGuess.includes("_")) {
      handleGameEnd(true);
    }
  }

  function checkLose(lives) {
    if (lives === 0) {
      handleGameEnd(false);
    }
  }

  function handleGameEnd(result) {
    setInput(!disableInput);
    //add delay to wait for hanging animation before switch component
    const newMode = "result";
    setTimeout(() => setMode(newMode), 100);
    setWin(result);
  }

  function resetGame() {
    createEmptyGuess();
    setLives(7);
    setReset(!reset);
    //reset hangman
  }
  return (
    <>
      <Header />
      {
        {
          intro: <Intro changeMode={changeMode} />,
          game: (
            <Game
              guess={guess}
              lives={lives}
              testChar={testChar}
              reset={reset}
            />
          ),
          result: (
            <Result
              answer={answer}
              winRound={winRound}
              round={round}
              streak={streak}
              totalWin={totalWin}
            />
          ),
        }[gameMode]
      }
      <Footer />
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
}

export default App;
