import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets/rockets';
import Missions from './components/missions/Missions';
import MyProfile from './components/myprofile/Myprofile';
import Header from './components/header/Header';
import { getRocketFromAPI } from './redux/Rockets/rockets';
import { getMissionsFromAPI } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer, shallowEqual);
  const missions = useSelector((state) => state.missionReducer, shallowEqual);
  useEffect(() => {
    dispatch(getRocketFromAPI());
    dispatch(getMissionsFromAPI())
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets rockets={rockets} />} />
        <Route path="/missiona" element={<Missions missions={missions} />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
