import React from 'react';

const ApplyButton = ({ onClick }) => {
  return (
    <button className="btn-apply-filters" onClick={onClick}>
      Apply Filters
    </button>
  );
};

export default ApplyButton;