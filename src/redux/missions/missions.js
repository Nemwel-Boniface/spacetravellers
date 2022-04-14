import fetchMissions from '../../components/var_api/var_api';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const LoadMissions = () => (dispatch) => {
  fetchMissions().then((mission) => {
    dispatch({ type: LOAD_MISSIONS, payload: mission });
  });
};

const initialState = {
  missions: [

  ],
};

const missionReducer = (state = initialState, mission) => {
  switch (mission.type) {
    case LOAD_MISSIONS:
      return {
        ...state, missions: [...state.missions, mission.payload],
      };
    default:
      return state;
  }
};

export { LoadMissions };
export default missionReducer;
