import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import * as constants from "../../constants.js";

function GuessList({ guesses }) {
  return (
    <div class="guess-results">
      {range(constants.NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess guessedWord={guesses[index]} index={index} />;
      })}
    </div>
  );
}

export default GuessList;
