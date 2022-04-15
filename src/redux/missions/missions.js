import fetchMissions from '../../components/var_api/var_api';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const JOIN_MISSIONS = 'spacetravellers/missions/joinMissions';

const LoadMissions = () => (dispatch) => {
  fetchMissions().then((mission) => {
    dispatch({ type: LOAD_MISSIONS, payload: mission });
  });
};

const joinMission = (id) => ({
  type: JOIN_MISSIONS,
  payload: id,
});

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [...action.payload];
    case JOIN_MISSIONS:
      return [
        ...state.map((mission) => (mission.id !== action.payload ? mission : 
          { ...mission, reserved: true }))];
    default:
      return state;
  }
};

export { LoadMissions };
export default missionReducer;
