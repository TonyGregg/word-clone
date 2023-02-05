import React from "react";

function GuessGame({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters");
      return;
    }
    console.log("guessed word " + tentativeGuess.toUpperCase());

    handleSubmitGuess(tentativeGuess.toUpperCase());

    setTentativeGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "playing"}
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}
export default GuessGame;
