import VideoPlayer from '../components/VideoPlayer';
import RelatedVideos from '../components/RelatedVideos';
import VideoDesc from '../components/VideoDesc';

const VideoPage = () => {
  return (
    <body>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer />
              <VideoDesc />
            </div>

            <RelatedVideos />
          </div>
        </div>
      </section>
    </body>
  );
};

export default VideoPage;
