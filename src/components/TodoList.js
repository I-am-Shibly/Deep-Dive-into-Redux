import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const filters = useSelector((state) => state.filter);

  const filterByStatus = (todo) => {
    const { status } = filters;

    switch (status) {
      case 'completed':
        return todo.completed;
      case 'incomplete':
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColor = (todo) => {
    const { colors } = filters;

    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }

    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todo
        ?.filter(filterByStatus)
        .filter(filterByColor)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
