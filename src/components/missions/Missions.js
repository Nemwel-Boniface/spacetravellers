import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './missions.css';
import MissionDetails from '../missiondetails/MissionDetails';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions, shallowEqual);
  return (
    missions.map((mission) => (
      <MissionDetails
        name={mission.mission_name}
        dex={mission.mission_description}
        key={mission.mission_id}
      />
    ))
  );
};

export default Missions;
