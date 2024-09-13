"use client";

import React, { useEffect, useState } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return debounce;
};

const Debounce = () => {
  const [text, setText] = useState("");
  const [delay, setDelay] = useState(1000);
  const debouncedText = useDebounce(text, delay);
  return (
    <div>
      <h3>Debounce Hook Tester</h3>
      <div>
        <label>
          Delay (ms):
          <input
            type="number"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          />
        </label>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ marginRight: "10px" }}
      />
      <p>Debounced Value: {debouncedText}</p>
    </div>
  );
};

export default Debounce;
