import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBlog } from '../features/blog/singleBlogSlice';

const LikeHandler = ({ likes, id }) => {
  const dispatch = useDispatch();

  const handleLikeUpdate = () => {
    dispatch(updateBlog({ likes: likes + 1, id }));
  };

  return (
    <button className="like-btn" id="singleLinks" onClick={handleLikeUpdate}>
      <i className="fa-regular fa-thumbs-up"></i> {likes}
    </button>
  );
};

export default LikeHandler;
