import React from 'react';
import { Link } from 'react-router-dom';

const RelatedBlogCard = ({ data }) => {
  const { id, title, image, createdAt, tags } = data;

  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags.map((tag) => `#${tag}`).join(', ')}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
