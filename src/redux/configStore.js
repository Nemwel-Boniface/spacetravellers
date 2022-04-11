import { createStore, combineReducers } from 'redux';
import missionReducer from './missions/missions';
import RocketsRuducer from './Rockets/rockets';

const reducers = combineReducers({
  missionReducer,
  RocketsRuducer,
});

const store = createStore(reducers);

export default store;
