import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResullt({ guesses }) {
  return (
    <div class="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess key={index} guessedWord={guesses[index]} />;
      })}
    </div>
  );
}

export default GuessResullt;
