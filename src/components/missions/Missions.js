import React from 'react';
import Proptypes from 'prop-types';
import Mission from './mission';
import './missions.css';

const Missions = (props) => {
  const { missions } = props;
  return (
    <div className="missions">
      <table>
        <tr className="H">
          <th className="missionHeader">Mission</th>
          <th className="missionDesc">Description</th>
          <th className="missionStatus">Status</th>
          <th className="missionBTNS">Buttons</th>
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

Missions.propTypes = {
  missions: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};

export default Missions;
