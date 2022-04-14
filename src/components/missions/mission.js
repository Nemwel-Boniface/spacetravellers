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
        <td>{name}</td>
        <td>{description}</td>
        <td><small>Not a member</small></td>
        <td><button type='button'>Join Mission</button></td>
      </tr>
    </>
  );
};

export default Mission;
