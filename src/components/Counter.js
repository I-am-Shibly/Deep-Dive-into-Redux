import Button from './Button';

const Counter = ({ increment, decrement, id, count }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold" id="display">
          {count}
        </div>
        <div className="flex space-x-3">
          <Button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            handler={() => increment(id)}
          >
            Increment
          </Button>

          <Button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            handler={() => decrement(id)}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
