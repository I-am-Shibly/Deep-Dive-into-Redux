import { useDispatch } from 'react-redux';
import HomeImg from '../assets/redux.svg';
import Search from './Search';
import { Link } from 'react-router-dom';
import { reset } from '../features/filters/filterSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(reset());
  };

  return (
    <nav className="px-2 bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/" onClick={handleHomeClick}>
          <img className="h-10" src={HomeImg} alt="Learn with Sumit" />
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
