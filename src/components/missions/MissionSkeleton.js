import React from 'react';
import Proptypes from 'prop-types';
import './missions.css';
import { useDispatch } from 'react-redux';
import { JoinMission, LeaveMission } from '../../redux/missions/missions';

const MissionSkeleton = ({
  name, description, status, id,
}) => {
  const dispatch = useDispatch();

  const missionParticipation = () => (
    status ? dispatch(JoinMission(id)) : dispatch(LeaveMission(id)));
  return (
  <>  
   {  (!status) ? ( 
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
      <button type="button" id={id} onClick={missionParticipation} className="mission-button">Join mission</button>
    </div>) : ( 
    <div className="mission-table">
      <h2>{name}</h2>
      <p className="mission-description">
        {description}
      </p>
      <p className="mission-status">
        Active Member
        {' '}
        {status}
      </p>
      <button type="button" id={id} onClick={missionParticipation} className="mission-button">Leave mission</button>
    </div>)
  };
  </>)
};

MissionSkeleton.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  status: Proptypes.bool.isRequired,
  id: Proptypes.string.isRequired,
};

export default MissionSkeleton;
