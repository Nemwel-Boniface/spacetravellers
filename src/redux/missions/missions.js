import fetchMissions from '../../components/var_comp/missionapi';

const LOAD_MISSIONS = 'spacetravellers/missions/LOAD_MISSIONS';
const LOADED_MISSIONS = 'spacetravellers/missions/LOADED_MISSIONS';

const LoadMissions = (dispatch) => {
  dispatch({ type: LOAD_MISSIONS });
  fetchMissions().then((mission) => {
    dispatch({ type: LOADED_MISSIONS, payload: mission });
  });
};

const initialState = {
  missions: [
  ],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
    case LOADED_MISSIONS:
      return {
        ...state, missions: [...state.missions, action.payload],
      };
    default:
      return state;
  }
};

export { LoadMissions };
export default missionReducer;
