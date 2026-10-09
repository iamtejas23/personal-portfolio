import React from 'react';
import { FaExternalLinkAlt, FaMedium } from 'react-icons/fa';
import './BlogCard.css';
import useSEO from '../../hooks/useSEO';
import { BLOG_POSTS, ROUTE_SEO } from '../../seo/seoConfig';

const BLOG_EXTRAS = [
  { tags: ['Git', 'DevOps', 'CI/CD'], image: 'https://cdn-images-1.medium.com/max/1024/1*HrFqAkq-RWxqB3-5bw2PVA.png' },
  { tags: ['Docker', 'ECR', 'Containers'], image: 'https://cdn-images-1.medium.com/max/1024/1*ffB6xr3scuKZ4VQsUMP91w.png' },
  { tags: ['SyncerD', 'Open Source', 'DevOps'], image: 'https://cdn-images-1.medium.com/max/1024/1*bt8UCCFod0hCQ_vfW8NcBw.png' },
];

export const blogData = BLOG_POSTS.map((post, index) => ({
  ...post,
  name: post.headline,
  link: post.url,
  dateTime: post.datePublished,
  ...BLOG_EXTRAS[index],
}));

const BlogCard = () => {
  useSEO({
    ...ROUTE_SEO['/blogs'],
  });

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1 className="blogs-title">Writing</h1>
        <p className="blogs-subtitle">
          Notes on SyncerD and DevOps — Git sync, container images, and keeping
          platforms in lockstep. Published on Medium.
        </p>
      </div>

      <div className="blog-grid">
        {blogData.map((blog) => (
          <article key={blog.link} className="blog-card">
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card-link"
              aria-label={`Read ${blog.name} on Medium`}
            >
              <div className="blog-cover">
                <img src={blog.image} alt="" loading="lazy" decoding="async" width="640" height="320" />
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-source">
                    <FaMedium aria-hidden="true" /> Medium
                  </span>
                  <time dateTime={blog.dateTime}>{blog.date}</time>
                </div>
                <h2 className="blog-name">{blog.name}</h2>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-tags">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <span className="blog-link">
                  Read on Medium <FaExternalLinkAlt size={11} />
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
