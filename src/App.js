import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import BlogCard from './components/BlogCard/BlogCard';
import Footer from './components/Footer/Footer';
import AmbientFX from './components/AmbientFX/AmbientFX';
import CommandPalette from './components/CommandPalette/CommandPalette';
import Toast from './components/Toast/Toast';
import RouteFlash from './components/RouteFlash/RouteFlash';
import HireDock from './components/HireDock/HireDock';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

export const AppShell = () => (
  <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <AmbientFX />
    <RouteFlash />
    <SideNav />
    <CommandPalette />
    <Toast />
    <HireDock />
    <main id="main-content" className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  </>
);

const App = () => {
  return (
    <Router>
      <AppShell />
    </Router>
  );
};

export default App;
