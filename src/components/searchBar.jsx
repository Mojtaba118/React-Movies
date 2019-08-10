import React from "react";

const SearchBar = ({ value, onSearch }) => {
  return (
    <input
      type="text"
      className="form-control mt-3 search"
      placeholder="Search..."
      value={value}
      onChange={onSearch}
    />
  );
};

export default SearchBar;
