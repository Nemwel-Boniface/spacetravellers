const baseUrl = 'https://api.spacexdata.com/v3/missions';
const fetchMissions = async () => {
  const result = await fetch(`${baseUrl}`).then((res) => res.json())
    .then((response) => {
      response.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
    });

  return result;
};
export default fetchMissions;
