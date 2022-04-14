import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionJoining, missionLeaving } from '../../redux/missions/missions';
import './missions.css';

const Mission = (props) => {
  const { mission } = props;
  const {
    id, name, description,
  } = mission;
  const dispatch = useDispatch();

  const handleMissions = () => {
    if (mission.reserved) {
      dispatch(missionLeaving(mission.id));
    } else {
      dispatch(missionJoining(mission.id));
    }
  };
  return (
    <>
      {mission.reserved ? (
        <>
          <tr id={id}>
            <td className="missionName">{name}</td>
            <td>{description}</td>
            <td><small className="missionBadgeActive">Active Member</small></td>
            <td><button className="missionLeave" id={id} onClick={handleMissions} type="button">Leave mission</button></td>
          </tr>
        </>
      ) : (
        <>
          <tr id={id}>
            <td className="missionName">{name}</td>
            <td>{description}</td>
            <td><small className="missionBadge">Not a member</small></td>
            <td><button id={id} onClick={handleMissions} type="button">Join Mission</button></td>
          </tr>
        </>
      )}
    </>
  );
};

Mission.propTypes = {
  mission: Proptypes.shape({
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    reserved: Proptypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
