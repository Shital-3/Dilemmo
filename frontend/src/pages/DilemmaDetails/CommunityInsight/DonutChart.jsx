import React from 'react';

const DonutChart = ({ percentage }) => {
  // SVG Stroke math for a simple 63% vs 37% split ring
  const strokeDashoffset = 440 - (440 * percentage) / 100;

  return (
    <div className="donut-chart-wrapper">
      <svg className="donut-svg" width="80" height="80" viewBox="0 0 160 160">
        <circle className="donut-bg" cx="80" cy="80" r="70" />
        <circle 
          className="donut-segment" 
          cx="80" 
          cy="80" 
          r="70" 
          strokeDasharray="440" 
          strokeDashoffset={strokeDashoffset} 
        />
      </svg>
    </div>
  );
};

export default DonutChart;