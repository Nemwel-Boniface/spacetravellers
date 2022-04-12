import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import RocketsReducer from './Rockets/rockets';

const reducers = combineReducers({
  missionReducer,
  RocketsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
