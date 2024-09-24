"use client";

import React, { useState } from "react";
import CountdownTimer from "../components/CountdownTimer";

const CountdownTimerPage = () => {
  const [inputTime, setInputTime] = useState("");
  const [startCountdown, setStartCountdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/^0+(?!$)/, "");
    setInputTime(value);
  };

  const handleStartClick = () => {
    if (inputTime > 0) {
      setStartCountdown(true);
    }
  };
  return (
    <div>
      <h1>Countdown Timer Page</h1>
      {!startCountdown ? (
        <div>
          <input
            type="number"
            min="1"
            placeholder="Enter time in seconds"
            value={inputTime}
            onChange={handleInputChange}
          />
          <button onClick={handleStartClick}>Set Time</button>
        </div>
      ) : (
        <CountdownTimer initialTime={inputTime} />
      )}
    </div>
  );
};

export default CountdownTimerPage;
