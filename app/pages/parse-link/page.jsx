"use client";

import React, { useState } from "react";
import "./ParseLink.css";

const ParseLinkComponent = () => {
  const [url, setUrl] = useState("");
  const [parsedResult, setParsedResult] = useState({});

  const parseDynamicLink = (url) => {
    try {
      const path = new URL(url).pathname;
      const pattern = /\/([^\/]+)\/([^\/]+)/g;
      const resp = {};
      let match;
      while ((match = pattern.exec(path)) !== null) {
        const key = match[1];
        const value = match[2];
        resp[key] = value;
      }
      return resp;
    } catch (error) {
      return { error: "Invalid URL" };
    }
  };

  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    setParsedResult(parseDynamicLink(inputUrl));
  };

  const handleButtonClick = (presetUrl) => {
    setUrl(presetUrl);
    setParsedResult(parseDynamicLink(presetUrl));
  };

  return (
    <div className="container">
      <h2 className="title">Dynamic Link Parser</h2>
      <p className="description">
        Enter a URL to parse its path segments into key-value pairs. This tool
        will extract segments from URLs like
        &quot;/project/12345/item/67890&quot;.
      </p>
      <div className="button-group">
        <button
          onClick={() =>
            handleButtonClick("https://www.d.com/project/12345/item/67890")
          }
          className="preset-button"
        >
          Use URL 1
        </button>
        <button
          onClick={() =>
            handleButtonClick(
              "https://www.d.com/project/12345/dock/9876/item/67890"
            )
          }
          className="preset-button"
        >
          Use URL 2
        </button>
      </div>
      <input
        type="text"
        className="url-input"
        placeholder="Enter URL here..."
        value={url}
        onChange={handleUrlChange}
      />
      <div className="result">
        <h3>Parsed Result:</h3>
        {Object.keys(parsedResult).length > 0 ? (
          <ul className="result-list">
            {Object.entries(parsedResult).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}</strong>: {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No parsed data available.</p>
        )}
      </div>
    </div>
  );
};

export default ParseLinkComponent;
