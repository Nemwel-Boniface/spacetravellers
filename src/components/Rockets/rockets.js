import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketFromAPI } from '../../redux/Rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer);
  useEffect(() => {
    dispatch(getRocketFromAPI());
  }, []);

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
