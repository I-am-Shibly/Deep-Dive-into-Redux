import './App.css';
import DisplayData from './components/DisplayData';
import FormData from './components/FormData';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <FormData />
        <ToastContainer />
        <DisplayData />
      </div>
    </Provider>
  );
}

export default App;
