import React from 'react';
import './search.css';
const Search = ({ setFilteredVal, placeholder, type, className }) => {
  const handleChange = e => {
    setFilteredVal(e.target.value);
  };
  return (
    <>
      <input
        type={type}
        className={`${className} search-box`}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
