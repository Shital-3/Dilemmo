
import React from 'react';


import Hero from './components/Hero/Hero';
import Navbar from "./components/common/Navbar/Navbar";
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
    </div>
  );
}

export default App;