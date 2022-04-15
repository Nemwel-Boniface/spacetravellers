import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionSkeleton from './MissionSkeleton';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);

  return (
    <div className="super-mission">
      {missions.map((mission) => (
        <MissionSkeleton
          key={mission.id}
          name={mission.name}
          description={mission.description}
          status={mission.reserved}
        />
      ))}
    </div>
  );
};

export default Missions;
