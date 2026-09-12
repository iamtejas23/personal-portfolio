import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHome, FaInfoCircle, FaEnvelope, FaNewspaper, FaGithub,
  FaLinkedin, FaSearch, FaCopy,
} from 'react-icons/fa';
import { projectsData } from '../Projects/Projects';
import { blogData } from '../BlogCard/BlogCard';
import { showToast } from '../Toast/Toast';
import './CommandPalette.css';

const PAGES = [
  { id: 'home', label: 'Home', hint: 'Overview, projects, skills', icon: FaHome, to: '/' },
  { id: 'about', label: 'About', hint: 'Background and education', icon: FaInfoCircle, to: '/about' },
  { id: 'contact', label: 'Contact', hint: 'Send a message', icon: FaEnvelope, to: '/contact' },
  { id: 'blogs', label: 'Blogs', hint: 'SyncerD on Medium', icon: FaNewspaper, to: '/blogs' },
];

const ACTIONS = [
  {
    id: 'email',
    label: 'Copy email',
    hint: 'tsmane8787@gmail.com',
    icon: FaCopy,
    run: async () => {
      try {
        await navigator.clipboard.writeText('tsmane8787@gmail.com');
        showToast('Email copied');
      } catch {
        showToast('Could not copy — use Contact instead');
      }
    },
  },
  {
    id: 'github',
    label: 'Open GitHub',
    hint: 'iamtejas23',
    icon: FaGithub,
    href: 'https://github.com/iamtejas23',
  },
  {
    id: 'linkedin',
    label: 'Open LinkedIn',
    hint: 'iamtejas23',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/iamtejas23/',
  },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const projectItems = projectsData.map((p) => ({
      id: `p-${p.id}`,
      label: p.name,
      hint: p.category,
      group: 'Projects',
      href: p.link,
    }));
    const writingItems = blogData.map((b) => ({
      id: `b-${b.link}`,
      label: b.name,
      hint: 'Medium',
      group: 'Writing',
      href: b.link,
    }));

    const all = [
      ...PAGES.map((p) => ({ ...p, group: 'Navigate' })),
      ...ACTIONS.map((a) => ({ ...a, group: 'Actions' })),
      ...writingItems,
      ...projectItems,
    ];

    if (!q) return all;
    return all.filter((item) =>
      `${item.label} ${item.hint || ''}`.toLowerCase().includes(q)
    );
  }, [query]);

  const toggle = () => {
    setOpen((v) => !v);
    setQuery('');
    setActive(0);
  };

  useEffect(() => {
    const onKey = (e) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape') setOpen(false);
    };
    const onOpen = () => {
      setOpen(true);
      setQuery('');
      setActive(0);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 20);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const run = (item) => {
    if (!item) return;
    if (item.to) navigate(item.to);
    if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer');
    if (item.run) item.run();
    setOpen(false);
    setQuery('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(items.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + items.length) % Math.max(items.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(items[active]);
    }
  };

  if (!open) return null;

  let lastGroup = '';

  return (
    <div className="cmdk-overlay" onClick={() => setOpen(false)}>
      <div
        className="cmdk-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cmdk-search">
          <FaSearch aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search pages, projects, actions…"
            aria-label="Search commands"
          />
          <kbd>esc</kbd>
        </div>
        <div className="cmdk-list" role="listbox">
          {items.length === 0 && (
            <p className="cmdk-empty">No matches</p>
          )}
          {items.map((item, i) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            const Icon = item.icon;
            return (
              <React.Fragment key={item.id}>
                {showGroup && <div className="cmdk-group">{item.group}</div>}
                <button
                  type="button"
                  className={`cmdk-item${i === active ? ' active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => run(item)}
                  role="option"
                  aria-selected={i === active}
                >
                  <span className="cmdk-item-label">
                    {Icon ? <Icon aria-hidden="true" /> : <span className="cmdk-dot" />}
                    {item.label}
                  </span>
                  {item.hint && <span className="cmdk-hint">{item.hint}</span>}
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
