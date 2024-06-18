import { useDispatch, useSelector } from 'react-redux';
import { tagRemoved, tagSelected } from '../features/filters/filterSlice';

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tagItem } = useSelector((state) => state.filter);

  const isTagSelected = tagItem.includes(title) ? true : false;
  const style = isTagSelected
    ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
    : 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

  const handleTagSelection = () => {
    if (isTagSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div className={style} onClick={handleTagSelection}>
      {title}
    </div>
  );
};

export default Tag;
