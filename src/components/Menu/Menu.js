// src/components/Menu.js
import React from 'react';
import {Link} from 'react-scroll';
import './menu.css';
import git from '../../assets/github.png';

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Tejas Mane</Link>
      </div>
      <div className="lin">
        <Link className="desktopMenuListItem" to="/">Home</Link>
        <Link className="desktopMenuListItem" to="/about">About</Link>
        <Link className="desktopMenuListItem" to="/projects">Projects</Link>
        <Link className="desktopMenuListItem" to="/contact">Contact</Link>
      </div>
      <div className='btn1'>
        <Link to="/" className="git"><img src={git} alt='github'></img></Link>
      </div>
      
    </nav>
  );
};

export default Menu;
