import { store } from './redux/store';
import { DynamicCounter } from './components/DynamicCounter';
import { Provider } from 'react-redux';
import { HooksCounter } from './components/HooksCounter';
import VariableCounter from './components/VariableCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <HooksCounter />
        <DynamicCounter />
        <VariableCounter />
        <VariableCounter dynamic />
      </div>
    </Provider>
  );
}

export default App;
