import React from "react";
import "../styles/Search.css";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
      <div className="container-inputSearch">
        <input
          type="text"
          value={search}
          ref={searchInput}
          onChange={handleSearch}
          placeholder="Buscar"
        />
      </div>
  );
};

export default Search;
