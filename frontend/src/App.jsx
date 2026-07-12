
import React from 'react';


import Hero from './components/Hero/Hero';
import Navbar from "./components/common/Navbar/Navbar";
import PopularDilemmas from './components/PopularDilemmas';
import DilemmaDetails from "./pages/DilemmaDetails/DilemmaDetails";
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero />
      <PopularDilemmas />
      <DilemmaDetails/>
    </div>
  );
}

export default App;