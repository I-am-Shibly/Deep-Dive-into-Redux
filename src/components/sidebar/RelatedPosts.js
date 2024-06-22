import React, { useEffect } from 'react';
import RelatedBlogCard from './RelatedBlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';

const RelatedPosts = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs } = useSelector((state) => state.relatedBlogs);

  useEffect(() => {
    dispatch(getRelatedBlogs({ id, tags }));
  }, [dispatch, id, tags]);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {relatedBlogs.map((relatedBlog) => (
          <RelatedBlogCard key={relatedBlog.id} data={relatedBlog} />
        ))}
      </div>
    </aside>
  );
};

export default RelatedPosts;
