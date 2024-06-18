import { useDispatch } from 'react-redux';
import searchImg from '../assets/search.svg';
import { useState } from 'react';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault()
  }

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
      <img className="inline h-4 cursor-pointer" src={searchImg} alt="Search" />
    </div>
  );
};

export default Search;
