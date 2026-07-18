import React from 'react';

const FilterSelect = ({ label, options, value, onChange }) => {
  return (
    <div className="filter-select-group">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;