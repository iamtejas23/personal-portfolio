import React from 'react';
import { FaEthereum } from 'react-icons/fa'; // Importing icons
import { SiWeb3Dotjs, SiHiveBlockchain, SiBitcoincash  } from 'react-icons/si'; // Importing Web3 and DEFI icons
import './BlogCard.css';

const BlogCard = () => {
  const blogData = [
    {
      icon: <SiBitcoincash  size={50} color="#f5f5f5" />, // Blockchain icon
      name: 'Blockchain',
      description: 'Blockchain Blog.',
      link: 'url_to_blog_1',
    },
    {
      icon: <SiWeb3Dotjs size={50} color="#f5f5f5" />, // WEB 3 icon
      name: 'WEB 3',
      description: 'WEB 3 Blog.',
      link: 'url_to_blog_2',
    },
    {
      icon: <SiHiveBlockchain  size={50} color="#f5f5f5" />, // DEFI icon
      name: 'DEFI',
      description: 'DEFI Blog.',
      link: 'url_to_blog_3',
    },
    {
      icon: <FaEthereum size={50} color="#f5f5f5" />, // Ethereum icon
      name: 'Ethereum',
      description: 'Ethereum Blog.',
      link: 'url_to_blog_4',
    },
  ];

  return (
    <div className="BlogCard-app">
      <h2>Blogs</h2>
      <div className="app-blog">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="icon-container">{blog.icon}</div> {/* Updated to use icons */}
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
