import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import RocketsReducer from './Rockets/rockets';

const MyMiddleWares = [thunk, logger];
const reducers = combineReducers({
  missionReducer,
  RocketsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(...MyMiddleWares),
);

export default store;
