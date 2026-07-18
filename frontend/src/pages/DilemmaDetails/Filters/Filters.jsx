import React, { useState } from 'react';
import FilterSelect from './FilterSelect';
import ApplyButton from './ApplyButton';
import { filterOptions } from '../filterOptions';
import './Filters.css';

const Filters = () => {
  const [branch, setBranch] = useState('All Branches');
  const [year, setYear] = useState('All Years');
  const [company, setCompany] = useState('All Types');
  const [appliedVia, setAppliedVia] = useState('All Options');

  const handleReset = () => {
    setBranch('All Branches');
    setYear('All Years');
    setCompany('All Types');
    setAppliedVia('All Options');
  };

  const handleApply = () => {
    console.log({ branch, year, company, appliedVia });
  };

  return (
    <div className="filters-card">
      <div className="filters-header">
        <h3>Filter Experiences</h3>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>
      
      <div className="filters-grid">
        <FilterSelect label="Branch" options={filterOptions.branches} value={branch} onChange={setBranch} />
        <FilterSelect label="Passout Year" options={filterOptions.passoutYears} value={year} onChange={setYear} />
        <FilterSelect label="Company Type" options={filterOptions.companyTypes} value={company} onChange={setCompany} />
        <FilterSelect label="Applied Via" options={filterOptions.appliedVia} value={appliedVia} onChange={setAppliedVia} />
      </div>
      
      <ApplyButton onClick={handleApply} />
    </div>
  );
};

export default Filters;