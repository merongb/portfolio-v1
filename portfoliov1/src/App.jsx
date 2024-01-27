import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/About'; 
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
