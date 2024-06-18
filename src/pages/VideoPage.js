import VideoPlayer from '../components/VideoPlayer';
import RelatedVideos from '../components/RelatedVideos';
import VideoDesc from '../components/VideoDesc';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSingleVideo } from '../features/Video/VideoSlice';
import Loading from '../components/Loading';

const VideoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { video, loading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(getSingleVideo(id));
  }, [dispatch, id]);

  let content;

  if (loading) {
    content = <Loading />;
  }

  if (!loading && !isError && video) {
    content = (
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer link={video.link} />
              <VideoDesc info={video} />
            </div>

            <RelatedVideos />
          </div>
        </div>
      </section>
    );
  }

  if (!loading && isError) {
    content = <div>{error}</div>;
  }

  if (!loading && !isError && !video) {
    content = <div>Sorry! No Video found.</div>;
  }

  return <>{content}</>;
};

export default VideoPage;
