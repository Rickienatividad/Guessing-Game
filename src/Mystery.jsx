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
      setNotification("CORRECT!!");
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
    if (score <= 1) {
      setNotification("GAME OVER!");
      document.body.style.backgroundColor = "red";
    }
  };

  const resetGame = () => {
    setRandomNum(Math.trunc(Math.random() * 20 + 1));
    setScore(20);
    document.body.style.backgroundColor = "rgb(15,15,15)";
  };

  return (
    <div>
      <div className="question-box mb-10">
        <h1>?</h1>
      </div>
      <div className="flexbox">
        <div className="flexinput">
          <input className="guess-box mb-5" onInput={handleGuess} type="text" />
          <div>
            <button className="guess-btn" onClick={checkGuess}>
              Check!
            </button>
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
