import React from 'react';
import Proptypes from 'prop-types';
import Rocket from './Rocket';

const Rockets = (props) => {
  const { rockets } = props;
  return (
    <div className="rockets">
      <ul>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
            image={rocket.image}
            description={rocket.description}
            name={rocket.name}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </div>
  );
};
Rockets.propTypes = {
  rockets: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};
export default Rockets;
