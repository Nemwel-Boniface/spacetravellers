import React from 'react';
import Mission from './mission';
import './missions.css';

const Missions = (props) => {
  const { missions } = props;
  return (
    <div className="missionss">
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            mission={mission}
            description={mission.description}
            name={mission.name}
            reserved={mission.reserved}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
