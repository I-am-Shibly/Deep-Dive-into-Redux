import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  notSorted,
  showMostLiked,
  showNewest,
} from '../../features/filter/filterSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const handleSorting = (e) => {
    const selectedValue = e.target.value;

    switch (selectedValue) {
      case 'newest':
        dispatch(showNewest());
        break;

      case 'most_liked':
        dispatch(showMostLiked());
        break;

      default:
        dispatch(notSorted());
    }
  };

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        onChange={handleSorting}
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;
