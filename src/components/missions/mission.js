import React from 'react';
import { useDispatch } from 'react-redux';
import { missionJoining, missionLeaving } from '../../redux/missions/missions';
import './missions.css';

const Mission = (props) => {
  const { mission } = props;
  const {
    id, name, description
  } = mission;
  const dispatch = useDispatch();

  const handleMissions = () => {
    if(mission.reserved) {
      dispatch(missionLeaving(mission.id))
    } else {
      dispatch(missionJoining(mission.id))
    }
  }
  return (
    <>
      <tr id={id}>
        <td className='missionName'>{name}</td>
        <td>{description}</td>
        <td><small className='missionBadge'>Not a member</small></td>
        <td><button id={id} onClick={handleMissions} type='button'>Join Mission</button></td>
      </tr>
    </>
  );
};

export default Mission;
