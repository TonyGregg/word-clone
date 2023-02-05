import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessGame from "../GuessGame/GuessGame";
import GuessResullt from "../GuessList/GuessResullt";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    if (nextGuesses.length > 6) {
      return;
    }
    setGuesses(nextGuesses);
  }
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessResullt guesses={guesses} />
      <GuessGame handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
