import { useState } from 'react';
import Pagination from '../components/Pagination';
import Tags from '../components/Tags';
import Videos from '../components/Videos';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 3;

  const { videos } = useSelector((state) => state.videos);

  return (
    <div className="px-5">
      <Tags />

      <Videos currentPage={currentPage} videosPerPage={videosPerPage} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalVideos={videos.length}
        videosPerPage={videosPerPage}
      />
    </div>
  );
};

export default HomePage;
