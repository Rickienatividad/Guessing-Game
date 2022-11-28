import { useState, useEffect } from "react";

export function Mystery() {
  const [guessedNumber, setGuessedNumber] = useState("");
  const [randomNum, setRandomNum] = useState("");
  const generateRandomNum = () => {
    setRandomNum(Math.trunc(Math.random() * 20 + 1));
  };
  useEffect(generateRandomNum, []);
  console.log(randomNum);

  const handleGuess = (event) => {
    setGuessedNumber(event.target.value);
  };

  const checkGuess = () => {
    if (guessedNumber == randomNum) {
      console.log("correct");
    } else if (guessedNumber > randomNum) {
      console.log("too high");
    } else {
      console.log("too low");
    }
  };

  return (
    <div>
      <div>
        <h1>?</h1>
      </div>
      <div>
        <input onInput={handleGuess} type="text" />
        <div>
          <button onClick={checkGuess}>Check!</button>
        </div>
      </div>
    </div>
  );
}
