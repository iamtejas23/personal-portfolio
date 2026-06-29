import React from 'react';
import { FaEthereum, FaExternalLinkAlt } from 'react-icons/fa';
import { SiWeb3Dotjs, SiHiveBlockchain, SiBitcoincash } from 'react-icons/si';
import './BlogCard.css';
import useSEO from '../../hooks/useSEO';

const blogData = [
  {
    icon: <SiBitcoincash size={36} />,
    name: 'Blockchain',
    color: '#F7931A',
    description: 'Discover the intricacies of blockchain technology and its real-world applications.',
    link: 'https://example.com/blockchain',
    comingSoon: true,
  },
  {
    icon: <SiWeb3Dotjs size={36} />,
    name: 'WEB3',
    color: '#a3a3ff',
    description: 'Explore the decentralised web, smart contracts, and the future of the internet.',
    link: 'https://example.com/web3',
    comingSoon: true,
  },
  {
    icon: <SiHiveBlockchain size={36} />,
    name: 'DeFi',
    color: '#4ade80',
    description: 'Learn about decentralised finance protocols and how they reshape global banking.',
    link: 'https://example.com/defi',
    comingSoon: true,
  },
  {
    icon: <FaEthereum size={36} />,
    name: 'Ethereum',
    color: '#c0c0ff',
    description: 'Get insights into the Ethereum ecosystem, EVM, and smart contract development.',
    link: 'https://example.com/ethereum',
    comingSoon: true,
  },
];

const BlogCard = () => {
  useSEO({
    title: 'Tech Blogs — Blockchain, Web3, DeFi & Ethereum | Tejas Mane',
    description: 'Coming soon: tech blog posts by Tejas Mane covering blockchain, Web3, DeFi protocols, Ethereum smart contracts, and cloud-native DevOps topics.',
    canonical: '/blogs',
  });

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1 className="blogs-title">Tech Blogs by Tejas Mane</h1>
        <p className="blogs-subtitle">
          Coming soon — deep dives into blockchain, Web3, DeFi, and Ethereum.
        </p>
      </div>

      <div className="blog-grid">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <div
              className="blog-icon-wrap"
              style={{ '--blog-color': blog.color }}
              aria-hidden="true"
            >
              <span style={{ color: blog.color }}>{blog.icon}</span>
            </div>

            <div className="blog-content">
              <div className="blog-card-top">
                <h2 className="blog-name">{blog.name}</h2>
                {blog.comingSoon && (
                  <span className="blog-soon-badge">Soon</span>
                )}
              </div>
              <p className="blog-description">{blog.description}</p>
            </div>

            {!blog.comingSoon ? (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                Read More <FaExternalLinkAlt size={11} />
              </a>
            ) : (
              <span className="blog-link blog-link-disabled" aria-disabled="true">
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
