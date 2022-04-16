import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionSkeleton from './MissionSkeleton';
import './missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);

  return (
    <div className="super-mission">
      <div className="header-container">
        <p>Mission</p>
        <p className="hola">Description</p>
        <p className="status">Status</p>
        <p className="join">JOin</p>
      </div>
      <div className="mission-container">
        {missions.map((mission) => (
          <MissionSkeleton
            key={mission.id}
            name={mission.name}
            description={mission.description}
            status={mission.reserved}
            id={mission.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Missions;
