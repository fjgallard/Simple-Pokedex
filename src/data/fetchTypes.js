const fetchTypes = async ({ queryKey }) => {
  const type = queryKey[1] || '';
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (!res.json) {
    throw new Error(`types/${type} fetch not ok`);
  }

  return res.json();
};

export default fetchTypes;
