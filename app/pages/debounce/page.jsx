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
    <div style={styles.containerStyle}>
      <h2 style={styles.headerStyle}>Debounce Hook Tester</h2>
      <p>
        <strong>Problem Description:</strong> Debouncing is a programming
        practice used to ensure that time-consuming tasks do not fire so often,
        making them more efficient. In this example, we demonstrate a debounce
        hook that delays updating a value until a certain amount of time has
        passed since the last update. This is particularly useful in scenarios
        like search inputs, where you want to wait for the user to stop typing
        before making an API call, rather than making a call for every
        keystroke.
      </p>
      <p>
        Try typing quickly into the input box below. Notice how the
        &quot;Debounced Value&quot; doesn&apos;t update immediately, but waits
        until you&apos;ve stopped typing for the specified delay. You can adjust
        the delay to see how it affects the debounce behavior.
      </p>
      <div style={{ marginBottom: "20px" }}>
        <label style={styles.labelStyle}>
          Delay (ms):
          <input
            type="number"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            style={styles.inputStyle}
          />
        </label>
      </div>
      <div>
        <label style={styles.labelStyle}>
          Input Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            style={styles.inputStyle}
          />
        </label>
      </div>
      <div style={styles.resultStyle}>
        <strong>Debounced Value:</strong> {debouncedText}
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#555555",
    lineHeight: "1.6",
  },

  headerStyle: {
    color: "#2c3e50",
    borderBottom: "2px solid #3498db",
    paddingBottom: "10px",
    marginBottom: "20px",
  },

  inputStyle: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },

  labelStyle: {
    display: "block",
    marginBottom: "5px",
    color: "#2c3e50",
    fontWeight: "bold",
  },

  resultStyle: {
    backgroundColor: "#f0f0f0",
    padding: "15px",
    borderRadius: "4px",
    marginTop: "20px",
  },
};

export default Debounce;
