"use client";

import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilterComponent = () => {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="item-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/yunqilee/interview-questions/blob/main/app/pages/search-filter/page.jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="github-button">View Code on GitHub</button>
      </a>
    </div>
  );
};

export default SearchFilterComponent;
