import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessGame from "../GuessGame/GuessGame";
import GuessList from "../GuessList/GuessList";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessList guesses={guesses} />
      <GuessGame guesses={guesses} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
