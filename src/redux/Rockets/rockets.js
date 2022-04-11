import * as actions from './actionTypes';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

let initialRockets = [];

const RocketsRuducer = (state = initialRockets, action) => {
  switch(action.type) {
    case actions.FETCHROCKETS:
      return [...action.payLoad];
    default:
      return state;
  }
};

export const getRocketFromAPI = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json()).then((data) => {
    const rockets = Object.keys(data).map((key) => {
      const rocket = data[key][0];
      return {
        id: key,
        ...rocket,
      };
    });
    dispatch({ type: actions.FETCHROCKETS, payLoad: rockets });
  }).catch(() => {});


export default RocketsRuducer;