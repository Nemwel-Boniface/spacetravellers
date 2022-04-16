import * as actions from './actionTypes';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialRockets = [];

const RocketsReducer = (state = initialRockets, action) => {
  switch (action.type) {
    case actions.FETCHROCKETS:
      return [
        ...action.payLoad,
      ];
    case actions.BOOKROCKET:
      return [...state.map((rocket) => {
        if (rocket.id !== action.payLoad) return rocket;
        return { ...rocket, reserved: true };
      }),
      ];
    case actions.CANCELBOOKING:
      return [...state.map((rocket) => {
        if (rocket.id !== action.payLoad) return rocket;
        return { ...rocket, reserved: false };
      }),
      ];
    case actions.ADDROCKETNAME:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export const getRocketFromAPI = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json()).then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
    dispatch({ type: actions.FETCHROCKETS, payLoad: rockets });
  }).catch(() => {});

export const RocketBooking = (id) => ({
  type: actions.BOOKROCKET,
  payLoad: id,
});

export const CancelRocketBooking = (id) => ({
  type: actions.CANCELBOOKING,
  payLoad: id,
});

export const addRocketToMyProfile = (id) => ({
  type: actions.ADDROCKETNAME,
  payLoad: id,
});

export default RocketsReducer;
