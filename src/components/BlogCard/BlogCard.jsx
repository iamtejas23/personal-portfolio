import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import { SiWeb3Dotjs, SiHiveBlockchain, SiBitcoincash } from 'react-icons/si';
import './BlogCard.css';

const BlogCard = () => {
  const blogData = [
    {
      icon: <SiBitcoincash size={50} color="yellow" />,
      name: 'Blockchain',
      description: 'Discover the intricacies of blockchain technology and its applications.',
      link: 'https://example.com/blockchain',
    },
    {
      icon: <SiWeb3Dotjs size={50} color="#000" />,
      name: 'WEB 3',
      description: 'Explore the decentralized web and its innovative features.',
      link: 'https://example.com/web3',
    },
    {
      icon: <SiHiveBlockchain size={50} color="#f5f5f5" />,
      name: 'DEFI',
      description: 'Learn about decentralized finance and its revolution in the financial world.',
      link: 'https://example.com/defi',
    },
    {
      icon: <FaEthereum size={50} color="#000" />,
      name: 'Ethereum',
      description: 'Get insights into Ethereum and its smart contract capabilities.',
      link: 'https://example.com/ethereum',
    },
  ];

  return (
    <div className="blogs-section">
      <h1 className="section-title">Tech Blogs</h1>
      <p className="section-description">
        Explore the latest in blockchain, web3, DEFI, and Ethereum technologies.
      </p>
      <div className="blog-cards-container">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-icon">{blog.icon}</div>
            <h2 className="blog-name">{blog.name}</h2>
            <p className="blog-description">{blog.description}</p>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
