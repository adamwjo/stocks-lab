import React from 'react';

const SearchBar = ({ sort, filter, updateFilter, updateSort }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sort == "Alphabetically"} onChange={(e) => updateSort(e.target.value) }/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sort == "Price"} onChange={(e) => updateSort(e.target.value) }/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={filter} onChange={(e) => updateFilter(e.target.value) }>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
