import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Missions from './components/missions/Missions';
import { LoadMissions } from './redux/missions/missions';
import fetchMissions from './components/var_api/var_api';

const Appmissions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchMissions().length < 0) { dispatch(LoadMissions()); }
  }, []);

  return (
    <div className="App">
      <Missions />
    </div>
  );
};

export default Appmissions;
