import React from 'react';
import './missions.css';

const Mission = (props) => {
  const { mission } = props;
  const {
    id, name, description
  } = mission;
  return (
    <>
      <tr id={id}>
        <td className='missionName'>{name}</td>
        <td>{description}</td>
        <td><small className='missionBadge'>Not a member</small></td>
        <td><button type='button'>Join Mission</button></td>
      </tr>
    </>
  );
};

export default Mission;
