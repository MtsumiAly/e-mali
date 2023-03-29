import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/Revlon.jpg" className="img-fluid w-100"  alt="image"/>
        </div>
        <div className="blog-content">
          <p className="date">13th March 2023</p>
          <h5 className="title">Get more from e-mali pay.</h5>
          <p className="description">
            Do you need to secure your payment method ?<br/>
            Get your e-mali Account at a free coast.
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
