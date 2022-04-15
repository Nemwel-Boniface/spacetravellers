import React from 'react';
import Proptypes from 'prop-types';
import './missions.css';
import { useDispatch } from 'react-redux';
const MissionSkeleton = ({ name, description, status }) => (
  <div className="mission-table">
    <h2>{name}</h2>
    <p className="mission-description">
      {description}
    </p>
    <p className="mission-status">
      Not a member
      {' '}
      {status}
    </p>
    <button type="button" className="mission-button">Join mission</button>
  </div>
);

MissionSkeleton.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  status: Proptypes.bool.isRequired,
};

export default MissionSkeleton;
