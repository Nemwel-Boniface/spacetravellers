import React from 'react';

const MissionSkeleton = (name, description, status) => (
  <div className="mission-table">
    <h2>{name}</h2>
    <div className="mission-description">
      {description}
    </div>
    <div className="mission-status">{status}</div>
    <button type="button" className="mission-button">Join mission</button>
  </div>
);
