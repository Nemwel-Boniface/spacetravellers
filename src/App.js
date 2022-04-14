import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Missions from './components/missions/Missions';
import { LoadMissions } from './redux/missions/missions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadMissions());
  }, []);

  return (
    <Missions />
  );
};

export default App;
