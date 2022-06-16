import React from "react";
import SearchIcon from "../../assets/svgs/SearchIcon";
import FilterIcon from "../../assets/svgs/FilterIcon";

const SearchField = ({ inputProps }) => {
  return (
    <div className="search_field">
      <SearchIcon />
      <input {...inputProps}></input>
      <FilterIcon />
    </div>
  );
};

export default SearchField;
