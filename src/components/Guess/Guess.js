import React from "react";
import { range } from "../../utils";

function Guess({ guessedWord, index }) {
  if (!guessedWord) return;
  console.log("guessedWord: ", guessedWord, "index: ", index);
  return (
    <p class="guess" key={index}>
      {range(5).map((id) => {
        return (
          <span class="cell" key={index + "-" + id}>
            {guessedWord.charAt(id)}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
