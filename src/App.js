import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets/rockets';
import MyProfile from './components/myprofile/Myprofile';
import Header from './components/header/Header';
import Appmissions from './Appmissions';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets  />} />
        <Route path="/missions" element={<Appmissions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
