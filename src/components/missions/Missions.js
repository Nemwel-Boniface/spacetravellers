import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions, shallowEqual);
  return (
    missions.map((mission) => (
))
  );
};

export default Missions;
