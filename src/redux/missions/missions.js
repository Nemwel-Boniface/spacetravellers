const LOAD_MISSIONS = 'spacetravellers/missions/missions';

const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = []

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [
        ...action.payLoad,
      ];
    default:
      return state;
  }
};

export const getMissionsFromAPI = () => (dispatch) => fetch(missionsURL)
.then((res) => res.json()).then((data) => {
  const missions = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
  dispatch({ type: LOAD_MISSIONS, payLoad: missions });
}).catch(() => {});

export default missionReducer;
