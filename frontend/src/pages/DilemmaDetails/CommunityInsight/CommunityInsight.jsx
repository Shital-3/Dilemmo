import React from 'react';
import DonutChart from './DonutChart';
import InsightList from './InsightList';
import { communityInsightData } from '../communityInsightData';
import './CommunityInsight.css';

const CommunityInsight = () => {
  const { totalExperiences, chartData, dsaPreferredIf, projectsPreferredIf } = communityInsightData;

  return (
    <div className="community-insight-card">
      <div className="insight-header">
        <h3>Community Insight</h3>
        <span className="badge-beta">Beta</span>
      </div>
      <p className="insight-subheading">Based on {totalExperiences} experiences</p>
      
      <div className="insight-body">
        <DonutChart percentage={chartData.dsa} />
        <div className="lists-container">
          <InsightList title="DSA Focused" items={dsaPreferredIf} variant="dsa" />
          <InsightList title="Projects Focused" items={projectsPreferredIf} variant="projects" />
        </div>
      </div>
      
      <p className="insight-footer-text">
        Remember: There's no one-size-fits-all. Consistency &gt; Choice.
      </p>
    </div>
  );
};

export default CommunityInsight;