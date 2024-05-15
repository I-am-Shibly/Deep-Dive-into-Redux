import notesImg from '../assets/images/notes.png';
import plusImg from '../assets/images/plus.png';
import tickImg from '../assets/images/double-tick.png';
import { useDispatch } from 'react-redux';
import {
  allComplete,
  clearCompleted,
} from '../redux/todoSlice/actions';
import { useState } from 'react';
import { addTodoThunk } from '../redux/todoSlice/thunk/addTodo';

const Header = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const completeAllHandler = () => {
    dispatch(allComplete());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompleted());
  };

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (todo?.trim() !== '') {
      dispatch(addTodoThunk(todo));
      setTodo('');
      return;
    }
    alert('Must input something');
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={addTodoHandler}
      >
        <img src={notesImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={completeAllHandler}
        >
          <img className="w-4 h-4" src={tickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearCompletedHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
