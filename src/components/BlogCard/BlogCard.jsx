import React from 'react';
import { FaExternalLinkAlt, FaMedium } from 'react-icons/fa';
import './BlogCard.css';
import useSEO from '../../hooks/useSEO';
import { onTiltMove, onTiltLeave } from '../../hooks/tilt';

export const blogData = [
  {
    name: 'SyncerD: Git Sync',
    description:
      'Keep Git repositories in sync across GitHub, GitLab, Bitbucket, Azure DevOps, and AWS CodeCommit — for migrations, backups, and provider outages.',
    link: 'https://medium.com/@iamtejas23/syncerd-git-sync-931c1c9661d5',
    date: 'Sep 3, 2026',
    tags: ['Git', 'DevOps', 'CI/CD'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*HrFqAkq-RWxqB3-5bw2PVA.png',
  },
  {
    name: 'SyncerD: Container Image Synchronization',
    description:
      'Move container images between Docker Hub, ECR, and other registries so CI/CD and Kubernetes always pull from where you need them.',
    link: 'https://medium.com/@iamtejas23/syncerd-container-image-synchronization-002f9ebc8b63',
    date: 'Sep 2, 2026',
    tags: ['Docker', 'ECR', 'Containers'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*ffB6xr3scuKZ4VQsUMP91w.png',
  },
  {
    name: 'Introducing SyncerD: A Lightweight Synchronization Engine for Modern DevOps',
    description:
      'A lightweight engine for syncing Git repos and container images across platforms — built for multi-cloud DevOps teams.',
    link: 'https://medium.com/@iamtejas23/introducing-syncerd-a-lightweight-synchronization-engine-for-modern-devops-f5dc1cc751ea',
    date: 'Sep 2, 2026',
    tags: ['SyncerD', 'Open Source', 'DevOps'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*bt8UCCFod0hCQ_vfW8NcBw.png',
  },
];

const BlogCard = () => {
  useSEO({
    title: 'Blogs — SyncerD, Git Sync & Container Images | Tejas Mane',
    description:
      'Read Tejas Mane on Medium: introducing SyncerD, Git repository sync across providers, and container image synchronization for modern DevOps.',
    canonical: '/blogs',
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
              onMouseMove={onTiltMove}
              onMouseLeave={onTiltLeave}
            >
              <div className="blog-cover">
                <img src={blog.image} alt="" loading="lazy" width="640" height="320" />
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-source">
                    <FaMedium aria-hidden="true" /> Medium
                  </span>
                  <time dateTime={blog.date}>{blog.date}</time>
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
