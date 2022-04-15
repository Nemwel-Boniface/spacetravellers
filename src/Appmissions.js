import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Missions from './components/missions/Missions';
import { LoadMissions } from './redux/missions/missions';

const Appmissions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (document.querySelector('.mission-container').children.length === 0) { dispatch(LoadMissions()); }
  }, []);

  return (
    <div className="App">
      <Missions />
    </div>
  );
};

export default Appmissions;
