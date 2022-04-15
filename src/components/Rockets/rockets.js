import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRocketFromAPI } from '../../redux/Rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.RocketsReducer, shallowEqual);
  const dispatch = useDispatch();
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
Rockets.propTypes = {
  rockets: Proptypes.arrayOf(
    Proptypes.shape({}),
  ).isRequired,
};
export default Rockets;
