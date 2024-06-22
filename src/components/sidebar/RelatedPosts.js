import React from 'react';
import RelatedPostCard from './RelatedPostCard';

const RelatedPosts = () => {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
      </div>
    </aside>
  );
};

export default RelatedPosts;
