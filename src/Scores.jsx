import { useState, useEffect } from "react";

export function Scores(props) {
  return (
    <div>
      <div className="mb-5">
        <p>{props.notification}</p>
      </div>
      <div>
        <p>Score: {props.score}</p>
      </div>
      <div>
        <p>High Score: {props.highScore}</p>
      </div>
      <button onClick={props.onReset}>Reset Game</button>
    </div>
  );
}
