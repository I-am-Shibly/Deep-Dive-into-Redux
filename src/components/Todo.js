import { useDispatch, useSelector } from 'react-redux';
import cancelImg from '../assets/images/cancel.png';
import { colorChange, deleteTodo, toggle } from '../redux/todoSlice/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const { id, todoText, color, completed } = todo;

  const toggleHandler = (id) => {
    dispatch(toggle(id));
  };

  const handleColorChange = (id, color) => {
    dispatch(colorChange(id, color));
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && 'border-green-500 focus-within:border-green-500'
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          className="opacity-0 absolute rounded-full"
          onChange={() => toggleHandler(id)}
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && 'line-through'}`}>
        {todoText}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === 'green' && 'border-green-500 bg-green-500'
        }`}
        title={'most priority'}
        onClick={() => handleColorChange(id, 'green')}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === 'yellow' && 'border-yellow-500 bg-yellow-500'
        }`}
        title={'medium priority'}
        onClick={() => handleColorChange(id, 'yellow')}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === 'red' && 'border-red-500 bg-red-500'
        }`}
        title={'less priority'}
        onClick={() => handleColorChange(id, 'red')}
      ></div>

      <img
        src={cancelImg}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        title="delete"
        onClick={() => deleteHandler(id)}
      />
    </div>
  );
};

export default Todo;
