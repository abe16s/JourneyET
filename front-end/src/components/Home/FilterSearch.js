import React from 'react';
import './filtersearch.css'; // Ensure you have the necessary styles

const FilterSearch = () => {
  return (
    <div className="filter-search-container">
    
      <input
        type="text"
        placeholder="Search for your destination"
        className="search-bar placeholder:text-gray-200"
      />
        <div className="filter">
        <div className="filter-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
          </svg>
          <span>Filter</span>
        </div>
        {/* <div className="filter-options">*/}
        <div className="grid grid-cols-3 gap-5">
          <button className="filter-option">Natural Sites</button>
          <button className="filter-option">Museums</button>
          <button className="filter-option">National Parks</button>
          <button className="filter-option">Cultural Sites</button> 
          <button className="filter-option">Religious Sites</button>
          <button className="filter-option">Historical Sites</button>
          <button className="filter-option">Religious Sites</button>
          <button className="filter-option">Lakes</button>
          <button className="filter-option">Mountains</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
