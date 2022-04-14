import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionSkeleton from './MissionSkeleton';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);

  return (
    <div className="super-mission">
      {missions.map((mission) => (
        <MissionSkeleton
          key={mission.mission_id}
          name={mission.mission_name}
          description={mission.mission_description}
          status={mission.mission_status}
        />
      ))}
    </div>
  );
};

export default Missions;
