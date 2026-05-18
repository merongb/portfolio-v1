import React from 'react';
import Home from './components/Home';
import About from './components/About'; 
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';





function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-between items-center gap-8 pt-28">
<Home/><Portfolio/>
<About/>

</main>
    </>
  );
}

export default App;
