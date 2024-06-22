import React from 'react';
import RelatedPosts from '../components/sidebar/RelatedPosts';
import BlogDetails from '../components/PostDetails';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../features/blogs/blogSlice';

const PostPage = () => {
  const dispatch = useDispatch();

  const handleGoHomeClick = () => {
    dispatch(reset());
  };

  return (
    <>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="goHome"
          onClick={handleGoHomeClick}
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        <BlogDetails />
        <RelatedPosts />
      </section>
    </>
  );
};

export default PostPage;
