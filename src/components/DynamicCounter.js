import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../redux/dynamicCounter/actions';

export const DynamicCounter = () => {
  const counter = useSelector((state) => state.DynamicCounter.count);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increase(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrease(value));
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{counter}</div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={() => incrementHandler(10)}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={() => decrementHandler(10)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
