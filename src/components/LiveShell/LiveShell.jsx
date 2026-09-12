import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LiveShell.css';

const PROMPT = 'tejas@kolhapur';

const HELP = [
  'available commands',
  '  help       whoami     status     neofetch',
  '  skills     stack      projects   blogs',
  '  contact    github     resume     clear',
  '  sudo       ping      matrix',
];

const NEOFETCH = [
  '        .--.          tejas@kolhapur',
  '       |o_o |         ---------------',
  '       |:_/ |         OS:     multi-cloud linux',
  "      //   \\ \\        Host:   portfolio v2",
  "     (|     | )       Kernel: kubernetes + terraform",
  '    /\'\\_   _/`\\       Shell:  bash / this one',
  '    \\___)=(___/       Role:   DevOps Engineer',
  '                      Stack:  AWS · K8s · Docker · Jenkins',
  '                      Status: open to remote work',
];

const SKILLS = 'aws  kubernetes  docker  terraform  jenkins  argocd  ansible  react  next.js';

const runCommand = (raw) => {
  const input = raw.trim().toLowerCase();
  if (!input) return { lines: [] };

  if (input === 'help' || input === 'ls') return { lines: HELP };
  if (input === 'clear' || input === 'cls') return { clear: true };
  if (input === 'whoami') {
    return { lines: ['tejas mane — devops engineer & frontend developer', 'kolhapur, india · remote-friendly'] };
  }
  if (input === 'status' || input === 'status --open-to-work') {
    return { lines: ['open to work  ●  remote  ·  aws  ·  kubernetes  ·  ci/cd'] };
  }
  if (input === 'neofetch' || input === 'fetch') return { lines: NEOFETCH };
  if (input === 'skills' || input === 'stack') return { lines: [SKILLS] };
  if (input === 'projects') {
    return {
      lines: [
        'netflix ci/cd · docker ci/cd · argocd gitops · terraform 3-tier',
        'airbnb clone · thunder · zomato clone · rapidquest',
        'tip: scroll the projects grid below, or filter DevOps / Frontend',
      ],
    };
  }
  if (input === 'blogs' || input === 'blog') return { nav: '/blogs', lines: ['opening writing…'] };
  if (input === 'contact' || input === 'hire' || input === 'email') {
    return { nav: '/contact', lines: ['opening contact…  tsmane8787@gmail.com'] };
  }
  if (input === 'github' || input === 'gh') {
    return { href: 'https://github.com/iamtejas23', lines: ['opening github.com/iamtejas23'] };
  }
  if (input === 'resume') {
    return { lines: ['click View Resume on the profile card, or type: contact'] };
  }
  if (input === 'ping') return { lines: ['pong  (12ms)  cluster healthy'] };
  if (input === 'matrix') {
    const glyphs = '01アイウエオカキクケコ01#*$';
    const rain = Array.from({ length: 7 }, () =>
      Array.from({ length: 42 }, () => glyphs[Math.floor(Math.random() * glyphs.length)]).join('')
    );
    return { lines: ['wake up, devops…', ...rain] };
  }
  if (input.startsWith('sudo')) {
    return { lines: ['permission denied: this cluster is read-only.', 'try `whoami` instead.'] };
  }
  if (input === 'cd ..' || input.startsWith('cd ')) {
    return { lines: ['nowhere to go — you are already at ~'] };
  }

  return {
    lines: [`command not found: ${raw.trim()}`, 'type `help` for the list'],
  };
};

const LiveShell = () => {
  const navigate = useNavigate();
  const [lines, setLines] = useState([
    { kind: 'sys', text: 'portfolio shell ready. type help to look around.' },
    { kind: 'out', text: 'status --open-to-work' },
    { kind: 'out', text: 'remote · AWS · Kubernetes · CI/CD' },
  ]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const histIndex = useRef(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' });
  }, [lines]);

  const submit = (raw) => {
    const cmd = raw.trim();
    const result = runCommand(cmd);

    setLines((prev) => {
      if (result.clear) return [];
      return [
        ...prev,
        { kind: 'in', text: cmd || ' ' },
        ...(result.lines || []).map((text) => ({ kind: 'out', text })),
      ];
    });

    if (cmd) {
      setHistory((h) => [...h, cmd]);
      histIndex.current = -1;
    }
    setValue('');

    if (result.nav) setTimeout(() => navigate(result.nav), 180);
    if (result.href) window.open(result.href, '_blank', 'noopener,noreferrer');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit(value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex.current < 0 ? history.length - 1 : Math.max(0, histIndex.current - 1);
      histIndex.current = next;
      setValue(history[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex.current < 0) return;
      const next = histIndex.current + 1;
      if (next >= history.length) {
        histIndex.current = -1;
        setValue('');
      } else {
        histIndex.current = next;
        setValue(history[next]);
      }
    }
  };

  return (
    <section
      className="live-shell"
      onClick={() => inputRef.current?.focus()}
      aria-label="Interactive portfolio terminal"
    >
      <div className="live-shell-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="live-shell-title">tejas — zsh</span>
      </div>

      <div className="live-shell-body">
        {lines.map((line, i) => (
          <div key={i} className={`shell-line ${line.kind}`}>
            {line.kind === 'in' ? (
              <>
                <span className="shell-prompt">{PROMPT}</span>
                <span className="shell-sep">:~$</span>
                <span>{line.text}</span>
              </>
            ) : (
              <span>{line.text}</span>
            )}
          </div>
        ))}

        <div className="shell-line in">
          <span className="shell-prompt">{PROMPT}</span>
          <span className="shell-sep">:~$</span>
          <input
            ref={inputRef}
            className="shell-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal command"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={endRef} />
      </div>

      <div className="shell-hints">
        {['help', 'whoami', 'neofetch', 'skills', 'blogs', 'contact'].map((c) => (
          <button key={c} type="button" className="shell-hint" onClick={() => submit(c)}>
            {c}
          </button>
        ))}
      </div>
    </section>
  );
};

export default LiveShell;
