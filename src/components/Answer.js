import React from "react";
import Letter from "./Letter";

function Answer({ guess }) {
  return guess.map((letter, index) => {
    return <Letter key={index} letter={letter} />;
  });
}

export default Answer;
