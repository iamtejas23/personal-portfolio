// SinglePageBlog.js

import React from 'react';
import './BlogCard.css';
import blockchain from '../../assets/blockchain.png';
import web3 from '../../assets/web3.png';
import defi from '../../assets/defi.png';
import ethereum from '../../assets/ethereum.png';

const BlogCard = () => {
  const blogData = [
    {
      image: blockchain,
      name: 'Blockchain',
      description: 'Blockchain Blog.',
      link: 'url_to_blog_1',
    },
    {
      image: web3,
      name: 'WEB 3',
      description: 'WEB 3Blog.',
      link: 'url_to_blog_2',
    },
    {
      image: defi,
      name: 'DEFI',
      description: 'DEFI Blog.',
      link: 'url_to_blog_2',
    },
    {
      image: ethereum,
      name: 'Ethereum',
      description: 'Ethereum Blog.',
      link: 'url_to_blog_2',
    },
    // Add more blog data as needed
  ];

  return (
    <div className="BlogCard-app">
        <h2>Blogs</h2>
        <div className="app-blog">
      {blogData.map((blog, index) => (
        <div className="blog-card" key={index}>
          <img src={blog.image} alt={blog.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-name">{blog.name}</h3>
            <p className="card-description">{blog.description}</p>
            <a href={blog.link} className="read-more-link">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BlogCard;
