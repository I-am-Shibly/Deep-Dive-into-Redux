import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../features/filter/filterBySearch';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-field group flex-1">
      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
      <input
        type="text"
        placeholder="Search Job"
        className="search-input"
        id="searchJob"
        onChange={(e) => dispatch(search(e.target.value))}
      ></input>
    </div>
  );
};

export default Search;
