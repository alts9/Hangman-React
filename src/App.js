import React, { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Game from "./components/Game";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const answer = [..."DOCOMO"];
  const [guess, setGuess] = useState([]);
  const [gameMode, setMode] = useState("result");

  //temporary parameter for result component
  const winRound = true;
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

  const [lives, setLives] = useState(7);

  function testChar(char) {
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

  function checkWin(newGuess) {
    if (!newGuess.includes("_")) {
      console.log("You Win!");
    }
  }

  function checkLose(lives) {
    if (lives === 0) {
      console.log("You lose!");
    }
  }

  return (
    <>
      <Header />
      {/* {gameMode === true ? (
        <Game guess={guess} lives={lives} testChar={testChar} />
      ) : (
        <Intro changeMode={changeMode} />
      )} */}
      {
        {
          intro: <Intro changeMode={changeMode} />,
          game: <Game guess={guess} lives={lives} testChar={testChar} />,
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
    </>
  );
}

export default App;
