import { createStore, combineReducers } from 'redux';
import missionReducer from './missions';

const reducers = combineReducers({
  missionReducer,
});

const store = createStore(reducers);

export default store;
