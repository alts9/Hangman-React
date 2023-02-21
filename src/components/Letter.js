import React, { useState, useEffect } from "react";

function Letter({ letter, testChar, reset }) {
  const [clicked, setClicked] = useState(false);
  function handleClick(e) {
    const targetClass = e.target.classList;
    if (testChar(letter)) {
      targetClass.add("included");
    } else if (testChar(letter) === false) {
      targetClass.add("not-included");
    }
    setClicked(true);
  }

  useEffect(() => setClicked(false), [reset]);

  return <span onClick={!clicked ? handleClick : null}>{letter}</span>;
}

export default Letter;
