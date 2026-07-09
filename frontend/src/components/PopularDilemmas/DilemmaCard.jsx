import React from 'react';

const DilemmaCard = ({ dilemma }) => {
  const { leftOption, rightOption, experiences } = dilemma;

  return (
    <div className="dilemma-card">
      <div className="dilemma-comparison">
        <div className={`dilemma-badge ${leftOption.colorClass}`}>
          {leftOption.text}
        </div>
        
        <div className="vs-divider">vs</div>
        
        <div className={`dilemma-badge ${rightOption.colorClass}`}>
          {rightOption.text}
        </div>
      </div>

      <div className="dilemma-footer">
        <span className="experience-count">
          <strong>{experiences}</strong> Experiences
        </span>
        <button className="explore-btn" onClick={() => console.log(`Explore dilemma ${dilemma.id}`)}>
          Explore <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default DilemmaCard;