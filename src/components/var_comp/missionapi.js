const baseUrl = 'https://api.spacexdata.com/v3/missions';
const fetchMissions = async () => {
  const result = await fetch(`${baseUrl}`).then((res) => res.json())
    .then((response) => response);

  return result;
};

export default fetchMissions;
