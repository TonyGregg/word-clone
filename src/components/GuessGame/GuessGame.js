import React from "react";

function GuessGame({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length !== 5) return;
        console.log(guess);
        if (guesses.length >= 6) return;
        const newGuesses = [...guesses];
        newGuesses.push(guess);
        setGuesses(newGuesses);
        console.log(newGuesses);
        setGuess("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        min={5}
        max={5}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessGame;
