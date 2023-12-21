
import React from 'react';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    
      <div className="App">
       <Menu/>
       <Hero/>
       <About/>
       <Contact/>
       <Footer/>
      </div>
    
  );
};

export default App;
