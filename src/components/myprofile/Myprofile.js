import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Populateprofile from '../populateprofile/Populateprofile';
import './myprofile.css';
import { addRocketToMyProfile } from '../../redux/Rockets/rockets';

const Myprofile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer);

  useEffect(() =>{
    dispatch(addRocketToMyProfile())
  }, []);
  return (
    <div className="myProfile">
    <section className="my-missions">
      <h2>My Mission</h2>
      <table className='reservedCont'>
        <tbody>
        {rockets.map((rocket) => (
         <tr className='reservedItem' key={rocket.id}>{rocket.name}</tr>
        ))}
        </tbody>
      </table>
    </section>
    <section className="my-rockets">
      <h2>My Rockets</h2>
      <Populateprofile />
    </section>
  </div>
  )
}

export default Myprofile;
