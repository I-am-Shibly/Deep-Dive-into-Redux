import React, { useEffect } from 'react';
import LikeHandler from './LikeHandler';
import Bookmark from './Bookmark';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../features/blog/singleBlogSlice';
import Loader from './Loader';

const BlogDetails = () => {
  const { id: blogId } = useParams();
  const dispatch = useDispatch();
  const { loading, blog, isError, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog(blogId));
  }, [dispatch, blogId]);

  const { id, title, description, isSaved, likes, tags, image } = blog;

  let content;

  if (loading) {
    content = <Loader />;
  } else if (!loading && !isError && Object.keys(blog).length > 0) {
    content = (
      <div className="post">
        <img
          src={image}
          alt="github"
          className="w-full rounded-md"
          id="megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="singleTitle">
            {title}
          </h1>
          <div className="tags" id="singleTags">
            {tags.map((tag) => `#${tag}`).join(' ')}
          </div>
          <div className="btn-group">
            <LikeHandler likes={likes} id={id} />

            <Bookmark id={id} isSaved={isSaved} />
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  } else if (!loading && !isError && Object.keys(blog).length === 0) {
    content = <h2>No Blog Found!</h2>;
  } else {
    content = error;
  }

  return <>{content}</>;
};

export default BlogDetails;
