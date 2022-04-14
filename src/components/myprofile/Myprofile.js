import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './myprofile.css';
import { addRocketToMyProfile } from '../../redux/Rockets/rockets';
import { addMissionsToMyProfile } from '../../redux/missions/missions';

const Myprofile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer);
  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    dispatch(addRocketToMyProfile());
    dispatch(addMissionsToMyProfile());
  }, []);
  return (
    <div className="myProfile">
      <section className="profile my-missions">
        <h2>My Mission</h2>
        <ul className="reservedCont">
          {missions.map((mission) => (
            <li className="reservedItem" key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      </section>
      <section className="profile my-rockets">
        <h2>My Rockets</h2>
        <ul className="reservedCont">
          {rockets.map((rocket) => (
            <li className="reservedItem" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Myprofile;
