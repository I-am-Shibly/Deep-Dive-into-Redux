import { useEffect } from 'react';
import Video from './Video';
import { useSelector, useDispatch } from 'react-redux';
import { getVideos } from '../features/videos/VideosSlice';
import Loading from './Loading';

const Videos = () => {
  const { loading, videos, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tagItem, searchKey } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  let filteredVideos = videos;

  if (tagItem && tagItem.length > 0) {
    filteredVideos = filteredVideos.filter((video) =>
      video.tags.some((tag) => tagItem.includes(tag))
    );
  }

  if (searchKey && searchKey.trim() !== '') {
    filteredVideos = filteredVideos.filter((video) =>
      video.tags.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

  let content;

  if (loading && !isError) {
    content = <Loading />;
  } else if (!loading && !isError && filteredVideos.length > 0) {
    content = filteredVideos.map((video) => (
      <Video video={video} key={video.id} />
    ));
  } else if (!loading && isError) {
    content = <div>{error}</div>;
  } else {
    content = <div>No video found!</div>;
  }

  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
      </div>
    </section>
  );
};

export default Videos;
