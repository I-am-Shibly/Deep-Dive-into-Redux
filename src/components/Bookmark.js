import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBookmark } from '../features/blog/singleBlogSlice';

const Bookmark = ({ isSaved, id }) => {
  const dispatch = useDispatch();

  const handleSave = () => {
    if (isSaved) {
      dispatch(updateBookmark({ id, isSaved: false }));
    } else {
      dispatch(updateBookmark({ id, isSaved: true }));
    }
  };

  return (
    <button
      className={`${isSaved && 'active'} save-btn`}
      id="singleSavedBtn"
      onClick={handleSave}
    >
      <i className="fa-regular fa-bookmark"></i> {isSaved ? 'Saved' : 'Save'}
    </button>
  );
};

export default Bookmark;
