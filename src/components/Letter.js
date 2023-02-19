import React, { useState } from "react";

function Letter({ letter, testChar }) {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    const targetClass = e.target.classList;
    testChar(letter)
      ? targetClass.add("included")
      : targetClass.add("not-included");
    setClicked(true);
  }

  return <span onClick={!clicked ? handleClick : null}>{letter}</span>;
}

export default Letter;
