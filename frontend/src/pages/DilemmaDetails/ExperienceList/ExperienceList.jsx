import React, { useState } from 'react';
import Tabs from './Tabs';
import ExperienceCard from './ExperienceCard';
import './ExperienceList.css';

const ExperienceList = ({ experiences }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = experiences.filter(exp => {
    if (activeTab === 'dsa') return exp.choice === 'DSA Focused';
    if (activeTab === 'projects') return exp.choice === 'Projects Focused';
    return true;
  });

  return (
    <div className="experience-list-container">
      <div className="list-controls-row">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <select className="sort-dropdown-menu">
          <option>Most Helpful</option>
          <option>Recent</option>
        </select>
      </div>
      <div className="cards-feed-stack">
        {filtered.map(item => <ExperienceCard key={item.id} item={item} />)}
      </div>
      <div className="paginator-trigger">
        <button onClick={() => alert('Loading matches...')}>↓ Load more experiences</button>
      </div>
    </div>
  );
};

export default ExperienceList;