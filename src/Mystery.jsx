import { useState, useEffect } from "react";
import { Scores } from "./Scores";

export function Mystery() {
  const [guessedNumber, setGuessedNumber] = useState("");
  const [randomNum, setRandomNum] = useState("");
  const [score, setScore] = useState(20);
  const [notification, setNotification] = useState("Start guessing...");
  const [highScore, setHighScore] = useState(0);

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
      if (score > highScore) {
        setHighScore(score);
      }
    } else if (guessedNumber > randomNum) {
      console.log("too high");
      setScore(score - 1);
      setNotification("TOO HIGH!!");
    } else {
      console.log("too low");
      setScore(score - 1);
      setNotification("TOO LOW!!");
    }
  };

  const resetGame = () => {
    setRandomNum(Math.trunc(Math.random() * 20 + 1));
    setScore(20);
  };

  return (
    <div>
      <div>
        <h1>?</h1>
      </div>
      <div className="flexbox">
        <div className="flexinput">
          <input onInput={handleGuess} type="text" />
          <div>
            <button onClick={checkGuess}>Check!</button>
          </div>
        </div>
        <div className="flexscores">
          <Scores
            score={score}
            notification={notification}
            highScore={highScore}
            onReset={resetGame}
          />
        </div>
      </div>
    </div>
  );
}
