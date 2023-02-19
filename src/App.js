import React, { useState, useEffect } from "react";
import "./css/App.css";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const answer = [..."DOCOMO"];
  const [guess, setGuess] = useState([]);

  function createEmptyGuess() {
    const newGuess = answer.map((char) => {
      return (char = "_");
    });
    setGuess(newGuess);
  }

  useEffect(() => {
    createEmptyGuess();
  }, []);

  function replaceCorrectGuess(guessChar) {
    //get an array consist of index of guessed letter
    const charIndex = answer.reduce((arr, ansChar, i) => {
      if (ansChar === guessChar) arr.push(i);
      return arr;
    }, []);
    const newGuess = guess.map((char, index) => {
      if (charIndex.includes(index)) {
        return guessChar;
      } else {
        return char;
      }
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
      <Game guess={guess} lives={lives} />
      <Keyboard testChar={testChar} />
    </>
  );
}

export default App;
