import React from 'react';
import Proptypes from 'prop-types';
import './missions.css';

const MissionSkeleton = ({ name, description, status }) => (
  <div className="mission-table">
    <h2>{name}</h2>
    <div className="mission-description">
      {description}
    </div>
    <div className="mission-status">{status}</div>
    <button type="button" className="mission-button">Join mission</button>
  </div>
);

MissionSkeleton.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  status: Proptypes.bool.isRequired,
};

export default MissionSkeleton;
