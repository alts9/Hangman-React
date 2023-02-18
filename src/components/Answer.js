import React from "react";
import Letter from "./Letter";

function Answer(answer) {
  return answer.answer.map((letter) => {
    return <Letter key={letter} letter="_" />;
  });
}

export default Answer;
