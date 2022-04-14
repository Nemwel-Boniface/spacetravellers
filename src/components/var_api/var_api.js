const baseUrl = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const result = await fetch(baseUrl).then((res) => res.json());
  const response = result.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));

  console.log(response);
  return response;
};

export default fetchMissions;
