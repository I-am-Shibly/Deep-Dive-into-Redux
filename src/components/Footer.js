import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByColor, filterByStatus } from '../redux/filterSlice/actions';

const Footer = () => {
  const todo = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const remainingTodos = todo.filter((task) => !task.completed).length;

  const numberOfTodo = (remainingTodos) => {
    switch (true) {
      case remainingTodos > 1:
        return `${remainingTodos} tasks`;

      case remainingTodos === 1:
        return `${remainingTodos} task`;

      default:
        return 'No task';
    }
  };

  const showStatus = (status) => {
    dispatch(filterByStatus(status));
  };

  const handleColorChange = (color, changeType) => {
    dispatch(filterByColor(color, changeType));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodo(remainingTodos)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filter.status === 'All' && 'font-bold text-[13px]'
          }`}
          onClick={() => showStatus('All')}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === 'completed' && 'font-bold text-[13px]'
          }`}
          onClick={() => showStatus('completed')}
        >
          Complete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filter.status === 'incomplete' && 'font-bold text-[13px]'
          }`}
          onClick={() => showStatus('incomplete')}
        >
          Incomplete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filter.colors.includes('green') && 'bg-green-500'
          }`}
          onClick={() =>
            handleColorChange(
              'green',
              filter.colors.includes('green') ? 'Removed' : 'Added'
            )
          }
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filter.colors.includes('yellow') && 'bg-yellow-500'
          }`}
          onClick={() =>
            handleColorChange(
              'yellow',
              filter.colors.includes('yellow') ? 'Removed' : 'Added'
            )
          }
        ></li>

        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filter.colors.includes('red') && 'bg-red-500'
          }`}
          onClick={() =>
            handleColorChange(
              'red',
              filter.colors.includes('red') ? 'Removed' : 'Added'
            )
          }
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
