"use client";

import React, { useState } from "react";
import "./LoadashGet.css";

const LoadashGet = () => {
  const sampleObject = {
    a: {
      b: {
        c: 42,
      },
    },
  };

  const [path, setPath] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [result, setResult] = useState("");

  const get = (obj, path, defaultValue = undefined) => {
    const pathArray = Array.isArray(path) ? path : path.split(".");
    return (
      pathArray.reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : undefined;
      }, obj) || defaultValue
    );
  };

  const handlePathChange = (e) => {
    const inputPath = e.target.value;
    setPath(inputPath);
    setResult(get(sampleObject, inputPath, defaultValue));
  };

  const handleDefaultChange = (e) => {
    const inputDefault = e.target.value;
    setDefaultValue(inputDefault);
    setResult(get(sampleObject, path, inputDefault));
  };

  const handleDefaultButtonClick = (presentDefault) => {
    setDefaultValue(presentDefault);
    setResult(get(sampleObject, path, presentDefault));
  };

  return (
    <div className="container">
      <h2 className="title">Implement lodash.get</h2>
      <p className="description">
        Enter the path to access properties within the object. Optionally, set a
        default value if the path doesn&apos;t exist.
      </p>

      <input
        type="text"
        className="path-input"
        placeholder="Enter path (e.g., a.b.c)"
        value={path}
        onChange={handlePathChange}
      />

      <div className="default-value-container">
        <input
          type="text"
          className="default-input"
          placeholder="Enter default value"
          value={defaultValue}
          onChange={handleDefaultChange}
        />
        <div className="button-group">
          <button
            onClick={() => handleDefaultButtonClick("undefined")}
            className="preset-button"
          >
            undefined
          </button>
          <button
            onClick={() => handleDefaultButtonClick("default")}
            className="preset-button"
          >
            default
          </button>
          <button
            onClick={() => handleDefaultButtonClick(42)}
            className="preset-button"
          >
            42
          </button>
        </div>
      </div>

      <div className="result">
        <h3>Result:</h3>
        <p>
          {result !== undefined ? JSON.stringify(result) : "No value found."}
        </p>
      </div>

      <div className="sample-object">
        <h3>Sample Object:</h3>
        <pre>{JSON.stringify(sampleObject, null, 2)}</pre>
      </div>
    </div>
  );
};

export default LoadashGet;
