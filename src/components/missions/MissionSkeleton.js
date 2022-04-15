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
    (status === false) ? dispatch(JoinMission(id)) : dispatch(LeaveMission(id)));
  return (
    <>
      { (status === false) ? (
        <div id={id} className="mission-table">
          <h2>{name}</h2>
          <p className="mission-description">
            {description}
          </p>
          <span className="mission-status">
            Not a member
          </span>
          <button type="button" id={id} onClick={missionParticipation} className="mission-button">Join mission</button>
        </div>
      ) : (
        <div id={id} className="mission-table">
          <h2>{name}</h2>
          <p className="mission-description">
            {description}
          </p>
          <p className="mission-status member">
            Active Member
          </p>
          <button type="button" id={id} onClick={missionParticipation} className="mission-button leave">Leave mission</button>
        </div>
      )}
    </>
  );
};

MissionSkeleton.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  status: Proptypes.bool.isRequired,
  id: Proptypes.string.isRequired,
};

export default MissionSkeleton;
