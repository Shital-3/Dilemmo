import React from 'react';

const InsightList = ({ title, items, variant }) => {
  return (
    <div className={`insight-list ${variant}`}>
      <h4>{title} is preferred if:</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InsightList;