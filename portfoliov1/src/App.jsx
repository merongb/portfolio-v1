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
      <main className="flex flex-col justify-between items-center gap-8 pt-28">
      <div id="home">
<Home/></div>

<About/>
</main>
    </>
  );
}

export default App;
