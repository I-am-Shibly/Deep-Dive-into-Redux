import React, { useEffect } from 'react';
import Blog from './Blog';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';
import Loader from './Loader';

const Blogs = () => {
  const dispatch = useDispatch();
  const { loading, blogs, isError, error } = useSelector((state) => state.blogs);
  const { sortNewest, sortMost_liked, filterSaved } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  let filteredBlogs = [...blogs];
  if (filterSaved) {
    filteredBlogs = blogs.filter((blog) => blog.isSaved);
  }

  let sortedBlogs = [...blogs];
  if (sortNewest) {
    sortedBlogs = sortedBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortMost_liked) {
    sortedBlogs = sortedBlogs.sort((a, b) => b.likes - a.likes);
  }

  // Combine filtered and sorted results
  let combinedBlogs = [...blogs];
  if (filterSaved) {
    combinedBlogs = filteredBlogs;
  } else if (sortNewest || sortMost_liked) {
    combinedBlogs = sortedBlogs;
  }

  let content;
  if (loading) {
    content = <Loader />;
  } else if (!loading && !isError && combinedBlogs.length > 0) {
    content = combinedBlogs.map((blog) => <Blog data={blog} key={blog.id} />);
  } else if (!loading && !isError && combinedBlogs.length === 0) {
    content = <h2>No Blog Found!</h2>;
  } else {
    content = <h2>{error}</h2>;
  }

  return <>{content}</>;
};

export default Blogs;
