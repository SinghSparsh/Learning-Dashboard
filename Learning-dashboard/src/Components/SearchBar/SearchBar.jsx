import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <span className="search-icon">
        <FiSearch size={18} color="#a9c1ff" />
      </span>
      <input
        type="text"
        placeholder="Search activities in all category..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
