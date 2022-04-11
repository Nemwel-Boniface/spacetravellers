import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/navbar";
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProjects from "./components/Myprofile";

function SpaceTravellers() {
  return (
    <div className="SpaceTravellers">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/myprojects" element={<MyProjects />} />
      </Routes>
    </div>
  );
}

export default SpaceTravellers;
