import React from 'react';
import './DilemmaHeader.css';

const DilemmaHeader = ({ title, breadcrumbs, subtitle }) => {
  return (
    <div className="dilemma-header-section">
      <nav className="breadcrumbs-nav">
        {breadcrumbs.map((crumb, idx) => (
          <span key={idx}>
            {crumb} {idx < breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </nav>
      <div className="title-action-row">
        <div>
          <h1>{title}</h1>
          <p className="subtitle-text">{subtitle}</p>
        </div>
        <div className="action-button-group">
          <button className="util-btn" aria-label="Bookmark">🔖</button>
          <button className="util-btn share-btn">🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default DilemmaHeader;