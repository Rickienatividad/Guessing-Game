import { useState, useEffect } from "react";

export function Scores(props) {
  const [notification, setNotification] = useState("Start guessing...");
  const [highScore, setHighScore] = useState("");

  return (
    <div>
      <div>
        <p>{notification}</p>
      </div>
      <div>
        <p>Score: {props.score}</p>
      </div>
      <div>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}
