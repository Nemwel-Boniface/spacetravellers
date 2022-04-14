const LOAD_MISSIONS = 'spacetravellers/missions/missions';
const JOINMISSIONS = 'spacetravellers/missions/joinMissions';
const LEAVEMISSION = 'spacetravellers/missions/leaveMisions';

const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = []

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return [
        ...action.payLoad,
      ];
      case JOINMISSIONS:
        return [...state.map((mission) => {
          if (mission.id !== action.payLoad) return mission;
          return { ...mission, reserved: true };
        }),
        ];
      case LEAVEMISSION:
        return [...state.map((mission) => {
          if (mission.id !== action.payLoad) return mission;
            return { ...mission, reserved: false };
          }),
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

export const missionJoining = (id) => ({
  type: JOINMISSIONS,
  payLoad: id,
});

export const missionLeaving = (id) => ({
  type: LEAVEMISSION,
  payLoad: id,
});

export default missionReducer;
