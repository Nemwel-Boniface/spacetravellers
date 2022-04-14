import fetchMissions from '../../components/var_comp/missionapi';

const LOAD_MISSIONS = 'spacetravellers/missions/LOAD_MISSIONS';
// const LOADED_MISSIONS = 'spacetravellers/missions/LOADED_MISSIONS';

const LoadMissions = () => (dispatch) => {
  fetchMissions().then((mission) => {
    dispatch({ type: LOAD_MISSIONS, payload: mission });
  });
};

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOAD_MISSIONS:
    case LOAD_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export { LoadMissions };
export default missionReducer;
