import React from 'react';
import RelatedPosts from '../components/sidebar/RelatedPosts';
import BlogDetails from '../components/BlogDetails';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../features/blogs/blogSlice';

const PostPage = () => {
  const dispatch = useDispatch();

  const handleGoHomeClick = () => {
    dispatch(reset());
  };

  const { blog } = useSelector((state) => state.blog);
  const { id, tags } = blog;

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
        <RelatedPosts id={id} tags={tags} />
      </section>
    </>
  );
};

export default PostPage;
