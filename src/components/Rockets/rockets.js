import React, { useEffect } from 'react';
import Rocket from './Rocket';
import { getRocketFromAPI } from '../../redux/Rockets/rockets';

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

export default Rockets;
