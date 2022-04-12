import React from "react";
import Proptypes from 'prop-types';
import './rockets.css';

const Rocket = (props) => {
  const { rocket } = props;
  const { id, name, description, image } = rocket;
  return (
    <div id={id} className="rocket">
      <div className="rocketLeft">
        <img src={image} alt="rocket"></img>
      </div>
      <div className="rocketRight">
        <h2>{name}</h2>
        <p>{description}</p>
        <button id={id} type="button">Reserve Rocket</button>
      </div>
    </div>
  )
}

Rocket.propTypes = {
  rocket: Proptypes.shape({
    name: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
  }).isRequired,
};
export default Rocket;