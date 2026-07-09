import React from 'react';
import DilemmaCard from './DilemmaCard';
import { dilemmasData } from './dilemmasData';
import './PopularDilemmas.css';

const PopularDilemmas = () => {
  return (
    <section className="popular-dilemmas-container">
      <div className="popular-dilemmas-header">
        <h2>Popular Dilemmas</h2>
        <a href="#view-all" className="view-all-link">
          View all dilemmas <span className="arrow">→</span>
        </a>
      </div>
      
      <div className="dilemmas-grid">
        {dilemmasData.map((dilemma) => (
          <DilemmaCard key={dilemma.id} dilemma={dilemma} />
        ))}
      </div>
    </section>
  );
};

export default PopularDilemmas;