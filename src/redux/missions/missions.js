const LOAD_MISSIONS = 'spacetravellers/missions/missions';

const LoadMissions = (dispatch) => {
  dispatch({ type: LOAD_MISSIONS });
  
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
