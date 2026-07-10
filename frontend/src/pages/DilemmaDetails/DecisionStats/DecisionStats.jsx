import React from 'react';
import ProgressBar from './ProgressBar';
import './DecisionStats.css';

const DecisionStats = ({ stats }) => {
  return (
    <div className="decision-stats-card">
      <div className="decision-split-row">
        <div className="stat-block-align-left">
          <span className="stat-percentage split-dsa">{stats.left.percentage}%</span>
          <span className="stat-heading">{stats.left.label}</span>
          <span className="stat-sub">{stats.left.count} experiences</span>
        </div>
        
        <div className="vs-badge-circle">VS</div>

        <div className="stat-block-align-right">
          <span className="stat-percentage split-projects">{stats.right.percentage}%</span>
          <span className="stat-heading">{stats.right.label}</span>
          <span className="stat-sub">{stats.right.count} experiences</span>
        </div>
      </div>
      <ProgressBar leftWidth={stats.left.percentage} rightWidth={stats.right.percentage} />
    </div>
  );
};

export default DecisionStats;