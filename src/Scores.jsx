import { useState, useEffect } from "react";
export function Scores() {
  const [notification, setNotification] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highscore, setHighScore] = useState("");

  return (
    <div>
      <div>
        <p>{notification}</p>
      </div>
      <div>
        <p>Score: {score}</p>
      </div>
      <div>
        <p>High Score: {highscore}</p>
      </div>
    </div>
  );
}
