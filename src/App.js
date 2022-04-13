import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Rockets from './components/Rockets/rockets';
import MyProfile from './components/myprofile/Myprofile';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getRocketFromAPI } from './redux/Rockets/rockets';


function App() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer, shallowEqual);
  useEffect(() => {
    dispatch(getRocketFromAPI());
    console.log('Rendering')
  }, []);
  return (
    <div className="App">
     <Header />
        <Routes>
          <Route path="/" element={<Rockets rockets={rockets}/>} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
    </div>
  );
}

export default App;
