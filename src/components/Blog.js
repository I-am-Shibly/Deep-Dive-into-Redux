import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ data }) => {
  const { id, title, image, tags, likes, isSaved, createdAt } = data;

  return (
    <div className="card">
      <Link to={`blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="card-header">
          <p className="publishedDate">{createdAt}</p>
          <p className="likeCount">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </p>
        </div>
        <Link to={`blog/${id}`} className="postTitle">
          {title}
        </Link>
        <div className="tags">{tags.map((tag) => `#${tag}`).join(' ')}</div>

        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="badge"> Saved </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
