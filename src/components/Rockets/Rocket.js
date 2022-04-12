import React from "react";
import PropTypes from 'prop-types';
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
export default Rocket;