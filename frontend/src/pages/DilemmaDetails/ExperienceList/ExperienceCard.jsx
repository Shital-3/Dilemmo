import React from 'react';
import HelpfulButton from './HelpfulButton';

const ExperienceCard = ({ item }) => {
  return (
    <div className="student-card-item">
      <div className="card-top-header">
        <div className="user-profile-meta">
          <div className="avatar-letter">{item.name[0]}</div>
          <div>
            <div className="name-verify-row">
              <h3>{item.name}</h3>
              {item.isVerified && <span className="verified-badge-tag">✓ Verified</span>}
            </div>
            <p className="sub-role-info">{item.role} • {item.branch} • {item.passoutYear} Passout</p>
          </div>
        </div>
        <HelpfulButton initialCount={item.helpfulCount} />
      </div>

      <div className="details-metrics-row">
        <div className="matrix-cell"><h6>Chose</h6><span className={item.choice.includes('DSA') ? 'dsa-highlight' : 'project-highlight'}>{item.choice}</span></div>
        <div className="matrix-cell"><h6>Applied Via</h6><span>{item.appliedVia}</span></div>
        <div className="matrix-cell"><h6>Timeline</h6><span>{item.timeline}</span></div>
        <div className="matrix-cell"><h6>Company Type</h6><span>{item.companyType}</span></div>
      </div>

      <div className="card-narrative-block">
        <div className="split-narrative">
          <div><h5>Biggest Challenge</h5><p>{item.biggestChallenge}</p></div>
          <div><h5>Biggest Mistake</h5><p>{item.biggestMistake}</p></div>
        </div>
        <div className="full-advice-row"><h5>One Advice</h5><p>{item.oneAdvice}</p></div>
      </div>

      <div className="card-resources-row">
        <span className="res-tag-lbl">Helpful Resources:</span>
        <div className="res-links-group">
          {item.resources.map((res, i) => (
            <a key={i} href={res.link} target="_blank" rel="noreferrer">🌐 {res.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;