import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByMenu } from '../redux/filterSlice/actions';

const FilterMenu = () => {
  const menu = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleClick = (input) => {
    dispatch(filterByMenu(input));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${menu.menuItem === 'All' && 'active-filter'}`}
          id="filterAll"
          onClick={() => handleClick('All')}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            menu.menuItem === 'Featured' && 'active-filter'
          }`}
          id="filterFeatured"
          onClick={() => handleClick('Featured')}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
