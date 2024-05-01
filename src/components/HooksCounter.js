import { useSelector } from 'react-redux';
import { decrease, increase } from '../redux/staticCounter/actions';
import { useDispatch } from 'react-redux';

export const HooksCounter = () => {
  const counter = useSelector((state) => state.StaticCounter.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increase());
  };

  const decrementHandler = () => {
    dispatch(decrease());
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{counter}</div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={incrementHandler}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={decrementHandler}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
