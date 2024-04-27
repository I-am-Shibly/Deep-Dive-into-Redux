import { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

function App() {
  const initialState = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
  ];

  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, current) => total + current.value, 0);
  };

  const increment = (id) => {
    const updatedCount = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          value: c.value + 1,
        };
      }
      return { ...c };
    });

    setState(updatedCount);
  };

  const decrement = (id) => {
    const updatedCount = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          value: c.value - 1,
        };
      }
      return { ...c };
    });

    setState(updatedCount);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map((count) => (
          <Counter
            increment={increment}
            decrement={decrement}
            id={count.id}
            count={count.value}
            key={count.id}
          />
        ))}
        <Stats count={totalCount()} />
      </div>
    </div>
  );
}

export default App;
