import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyProfile from './components/myprofile/Myprofile';
import { getRocketFromAPI } from './redux/Rockets/rockets';

function Appprofile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketFromAPI());
  }, []);
  return (
    <MyProfile />
  );
}

export default Appprofile;
