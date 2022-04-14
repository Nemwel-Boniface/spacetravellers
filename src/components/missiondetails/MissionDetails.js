import React from 'react';

const MissionDetails = (name, dex) => {
  
  
  return(
  <div className="mission-page">
    <div className="mission-title">{name}</div>
    <div className="mission-description">{dex}</div>
    <div className="mission-status">status</div>
  </div>
)};

export default MissionDetails;
