import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllBlogs, showSaved } from '../../features/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { filterAll, filterSaved } = useSelector((state) => state.filter);

  const handleFiltering = (e) => {
    if (e.target.value === 'all') {
      dispatch(showAllBlogs(e.target.checked));
    } else {
      dispatch(showSaved(e.target.checked));
    }
  };

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filterAll}
            className="radio"
            onChange={handleFiltering}
          />
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            value="saved"
            className="radio"
            checked={filterSaved}
            onChange={handleFiltering}
          />
          <label htmlFor="saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
