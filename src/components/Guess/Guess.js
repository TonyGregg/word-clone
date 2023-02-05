import React from "react";
import { range } from "../../utils";

function Guess({ guessedWord }) {
  if (!guessedWord) guessedWord = "    ";
  console.log("guessedWord: ", guessedWord);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {guessedWord[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
