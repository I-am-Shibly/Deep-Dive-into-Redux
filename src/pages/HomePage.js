import Pagination from '../components/Pagination';
import Tags from '../components/Tags';
import Videos from '../components/Videos';

const HomePage = () => {
  return (
    <div className='px-5'>
      <Tags />

      <Videos />

      <Pagination />
    </div>
  );
};

export default HomePage;
