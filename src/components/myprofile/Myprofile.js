import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Populateprofile from '../populateprofile/Populateprofile';
import './myprofile.css';
import { addRocketToMyProfile } from '../../redux/Rockets/rockets';

const Myprofile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer);

  useEffect(() => {
    dispatch(addRocketToMyProfile());
  }, []);
  return (
    <div className="myProfile">
      <section className="my-missions">
        <h2>My Mission</h2>
        <Populateprofile />
      </section>
      <section className="my-rockets">
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
