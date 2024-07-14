import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSalary } from '../../features/filter/filterBySalary';

const SortBySalary = () => {
  const dispatch = useDispatch();
  const { salary } = useSelector((state) => state.filterSalary);

  return (
    <select
      id="sort"
      name="sort"
      autoComplete="sort"
      className="flex-1"
      value={salary}
      onChange={(e) => dispatch(changeSalary(e.target.value))}
    >
      <option value={0}>Default</option>
      <option value={1}>Salary (Low to High)</option>
      <option value={-1}>Salary (High to Low)</option>
    </select>
  );
};

export default SortBySalary;
