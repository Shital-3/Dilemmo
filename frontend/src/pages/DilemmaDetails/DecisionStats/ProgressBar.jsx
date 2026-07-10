import React from 'react';

const ProgressBar = ({ leftWidth, rightWidth }) => {
  return (
    <div className="split-progress-container" style={{ display: 'flex', height: '8px', borderRadius: '9999px', overflow: 'hidden' }}>
      <div style={{ width: `${leftWidth}%`, backgroundColor: '#6366f1' }}></div>
      <div style={{ width: `${rightWidth}%`, backgroundColor: '#10b981' }}></div>
    </div>
  );
};

export default ProgressBar;