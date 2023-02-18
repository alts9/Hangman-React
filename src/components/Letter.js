import React from "react";

function Letter({ letter }) {
  function handleClick(e) {
    console.log(letter);
  }

  return <span onClick={handleClick}>{letter}</span>;
}

export default Letter;
