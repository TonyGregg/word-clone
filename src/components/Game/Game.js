import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessGame from "../GuessGame/GuessGame";
import GuessResullt from "../GuessList/GuessResullt";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import SadBanner from "../SadBanner/SadBanner";
import WonBanner from "../WonBanner/WonBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    console.log("guessed word " + tentativeGuess + "answer is " + answer);
    if (tentativeGuess === answer) {
      setGameStatus("won");
      console.log("You won!");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      console.log("You lost!");
      setGameStatus("lost");
    }
  }
  const [guesses, setGuesses] = React.useState([]);

  // playing, won, lost
  const [gameStatus, setGameStatus] = React.useState("playing");

  return (
    <>
      <GuessResullt guesses={guesses} answerWord={answer} />
      <GuessGame
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
