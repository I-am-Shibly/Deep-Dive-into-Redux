import { useSelector } from 'react-redux';

const Navbar = ({ onCartClick }) => {
  const cartItems = useSelector((state) => state.cart);
  const { totalItems } = cartItems;

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a href="#home" className="navHome" id="home">
            Home
          </a>
          <a href="#" className="navCart" id="cart" onClick={onCartClick}>
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="totalCart">{totalItems}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
