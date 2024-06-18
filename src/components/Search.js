import { useDispatch, useSelector } from 'react-redux';
import searchImg from '../assets/search.svg';
import { useEffect, useState } from 'react';
import { reset, searched } from '../features/filters/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

const Search = () => {
  const { searchKey } = useSelector((state) => state.filter);
  const [input, setInput] = useState(searchKey);
  const dispatch = useDispatch();

  const match = useMatch('/');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    if (!match) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (input === '') {
      dispatch(reset());
    }
  }, [dispatch, input]);

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSearch}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchImg}
        alt="Search"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
