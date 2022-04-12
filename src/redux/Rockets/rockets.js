import FETCHROCKETS from './actionTypes';

const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialRockets = [];

const RocketsReducer = (state = initialRockets, action) => {
  switch (action.type) {
    case FETCHROCKETS:
      return [
        ...action.payLoad,
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
    dispatch({ type: FETCHROCKETS, payLoad: rockets });
  }).catch(() => {});

export default RocketsReducer;
