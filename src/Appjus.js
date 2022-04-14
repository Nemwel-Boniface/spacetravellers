import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Rockets from './components/Rockets/rockets';
import { getRocketFromAPI } from './redux/Rockets/rockets';

function Appjus() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.RocketsReducer, shallowEqual);
  useEffect(() => {
    dispatch(getRocketFromAPI());
  }, []);

  return (
    <div className="App">
      <Rockets rockets={rockets} />
    </div>
  );
}

export default Appjus;
