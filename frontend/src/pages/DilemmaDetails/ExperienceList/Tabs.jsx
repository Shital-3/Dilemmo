import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="filter-tabs-layout">
      <button className={`tab-pill-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => onTabChange('all')}>
        All Experiences (126)
      </button>
      <button className={`tab-pill-btn ${activeTab === 'dsa' ? 'active' : ''}`} onClick={() => onTabChange('dsa')}>
        DSA Focused (79)
      </button>
      <button className={`tab-pill-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => onTabChange('projects')}>
        Projects Focused (47)
      </button>
    </div>
  );
};

export default Tabs;