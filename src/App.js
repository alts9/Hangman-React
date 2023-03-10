import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Game from "./components/Game";
import Result from "./components/Result";
import Footer from "./components/Footer";
import { pickAnswer } from "./components/wordlist";
import "./css/App.css";

function App() {
  const [answer, setAnswer] = useState([..."TEST"]);
  const [guess, setGuess] = useState([]);
  const [gameMode, setMode] = useState("intro");
  const [disableInput, setInput] = useState(false);
  const [winRound, setWinRound] = useState(false);
  const [lives, setLives] = useState(8);
  const [reset, toggleReset] = useState(false);
  const [round, setRound] = useState(1);
  const [winCount, setwinCount] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    getNewAnswer();
  }, [round]);

  function getNewAnswer() {
    const newAnswer = [...pickAnswer()];
    setAnswer(newAnswer);
    // console.log("newAnswer: " + newAnswer);
    createEmptyGuess(newAnswer);
  }

  function createEmptyGuess(answer) {
    const newGuess = answer.map((char) => {
      return (char = "_");
    });
    setGuess(newGuess);
  }

  function changeMode(mode) {
    const newMode = mode;
    setMode(newMode);
  }

  function insertCorrectGuess(guessChar) {
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
    if (!disableInput) {
      if (answer.includes(char)) {
        insertCorrectGuess(char);
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
    setWinRound(result);
    setInput(true);
    //add delay to wait for hanging animation before switch component
    const newMode = "result";
    setTimeout(() => {
      setMode(newMode);
      updateStats(result);
    }, 700);
  }

  function updateStats(result) {
    if (result) {
      const newWinCount = winCount + 1;
      setwinCount(newWinCount);
      const newStreak = streak + 1;
      setStreak(newStreak);
    } else {
      setStreak(0);
    }
  }

  function resetGame() {
    getNewAnswer();
    setLives(8);
    toggleReset(!reset);
    setInput(false);
    const newRound = round + 1;
    setRound(newRound);
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
              round={round}
              streak={streak}
              winCount={winCount}
            />
          ),
          result: (
            <Result
              answer={answer}
              winRound={winRound}
              round={round}
              streak={streak}
              winCount={winCount}
              resetGame={resetGame}
              changeMode={changeMode}
            />
          ),
        }[gameMode]
      }
      <Footer />
    </>
  );
}

export default App;
