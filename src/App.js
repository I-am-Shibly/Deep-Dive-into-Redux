import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './components/pages/HomePage';
import Navbar from './components/Navbar';
import CartPage from './components/pages/CartPage';
import { store } from './redux/store';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar onCartClick={showCartHandler} />
        {!showCart && <HomePage />}
        {showCart && <CartPage />}
      </div>
    </Provider>
  );
}

export default App;
