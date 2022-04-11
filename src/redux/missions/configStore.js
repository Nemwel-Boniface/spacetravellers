import { createStore, combineReducers } from 'redux';
import missionReducer from './missions';

const reducers = combineReducers({
    missionReducer,
})

