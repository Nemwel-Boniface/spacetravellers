import React from 'react';
import Proptypes from 'prop-types';
import './rockets.css';
import { useDispatch } from 'react-redux';
import { CancelRocketBooking, RocketBooking } from '../../redux/Rockets/rockets';

const Rocket = (props) => {
  const { rocket } = props;
  const {
    id, name, description, image,
  } = rocket;

  const dispatch = useDispatch();

  const handleBooking = () => {
    if (rocket.reserved) {
      dispatch(CancelRocketBooking(rocket.id));
    } else {
      dispatch(RocketBooking(rocket.id));
    }
  };
  return (
    <div id={id} className="rocket">
      <div className="rocketLeft">
        <img src={image} alt="rocket" />
      </div>
      <div className="rocketRight">
        <h2>{name}</h2>
        {rocket.reserved
          ? (
            <>
              <p>
                <small className="reservedbtn">Reserved</small>
                {description}
              </p>
              <button className="cancelReserve" onClick={handleBooking} id={id} type="button">Cancel Reservation</button>
            </>
          )
          : (
            <>
              <p>{description}</p>
              <button onClick={handleBooking} id={id} type="button">Reserve Rocket</button>
            </>
          )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: Proptypes.shape({
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    reserved: Proptypes.bool.isRequired,
  }).isRequired,
};
export default Rocket;
