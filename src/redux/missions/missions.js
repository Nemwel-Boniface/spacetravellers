import fetchMissions from '../../components/var_api/var_api';

const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const JOIN_MISSIONS = 'spacetravellers/missions/joinMissions';
const LEAVE_MISSIONS = 'spacetravellers/missions/leaveMissions';
const POPULATE_MISSIONS_PROFILE = 'spacetravellers/mission/populateMissionsProfile';

const LoadMissions = () => (dispatch) => {
  fetchMissions().then((mission) => {
    dispatch({ type: LOAD_MISSIONS, payload: mission });
  });
};

const JoinMission = (id) => ({
  type: JOIN_MISSIONS,
  payload: id,
});

const LeaveMission = (id) => ({
  type: LEAVE_MISSIONS,
  payload: id,
});

const PopulateMissionProfile = (id) => ({
  type: POPULATE_MISSIONS_PROFILE,
  payload: id,
});

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [...action.payload];
    case JOIN_MISSIONS:
      return [
        ...state.map((mission) => (mission.id !== action.payload ? mission
          : { ...mission, reserved: true }))];
    case LEAVE_MISSIONS:
      return [
        ...state.map((mission) => (mission.id !== action.payload ? mission
          : { ...mission, reserved: false }))];
    case POPULATE_MISSIONS_PROFILE:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export {
  LoadMissions, JoinMission, LeaveMission, PopulateMissionProfile,
};
export default missionReducer;
