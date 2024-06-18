import LikeImg from '../assets/like.svg';
import UnlikeImg from '../assets/unlike.svg';

const VideoDesc = ({info}) => {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {info.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {info.date}
        </h2>

        {/* like/unlike */}
        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={LikeImg} alt="Like" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              100K
            </div>
          </div>
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={UnlikeImg} alt="Unlike" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600">
              100K
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {info.description}
      </div>
    </div>
  );
};

export default VideoDesc;
