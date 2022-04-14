import fetchMissions from '../../components/var_api/var_api';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';

const LoadMissions = () => (dispatch) => {
  fetchMissions().then((mission) => {
    dispatch({ type: LOAD_MISSIONS, payload: mission });
  });
};

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export { LoadMissions };
export default missionReducer;
