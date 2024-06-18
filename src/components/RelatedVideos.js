import { useEffect } from 'react';
import RelatedVideo from './RelatedVideo';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideos } from '../features/relatedVideos/relatedVideosSlice';
const RelatedVideos = () => {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.video);
  const { relatedVideos } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(getRelatedVideos({ tags: video.tags, id: video.id }));
  }, [dispatch, video.tags, video.id]);

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {relatedVideos.data?.map((relatedVideo) => (
        <RelatedVideo relatedVideo={relatedVideo} key={relatedVideo.id} />
      ))}
    </div>
  );
};

export default RelatedVideos;
