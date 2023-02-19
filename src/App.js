import React, { useState, useEffect } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const answer = [..."DOCOMO"];
  const [guess, setGuess] = useState([]);
  const [gameMode, setMode] = useState(false);

  function createEmptyGuess() {
    const newGuess = answer.map((char) => {
      return (char = "_");
    });
    setGuess(newGuess);
  }

  function changeMode() {
    setMode(!gameMode);
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
      setLives(newLives);
      return false;
    }
  }

  function checkWin(newGuess) {
    if (!newGuess.includes("_")) {
      console.log("You Win!");
    }
  }

  return (
    <>
      <Header />
      {/* <Game guess={guess} lives={lives} testChar={testChar} /> */}

      {gameMode === true ? (
        <Game guess={guess} lives={lives} />
      ) : (
        <Intro changeMode={changeMode} />
      )}
      <Footer />
    </>
  );
}

export default App;
