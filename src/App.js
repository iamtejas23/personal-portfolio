// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav/SideNav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import BlogCard from './components/BlogCard/BlogCard';


const App = () => {
  return (
    <Router>
      <SideNav />
      <div className='main-app' style={{ display: 'flex' }}>
        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blogs" element={<BlogCard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
