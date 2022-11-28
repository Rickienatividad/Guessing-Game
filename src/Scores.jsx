import { useState, useEffect } from "react";

export function Scores(props) {
  const [highScore, setHighScore] = useState("");

  return (
    <div>
      <div>
        <p>{props.notification}</p>
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
