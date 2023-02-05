import React from "react";

function WonBanner({ numOfGuesses }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`} guesses
        </strong>
      </p>
    </div>
  );
}

export default WonBanner;
