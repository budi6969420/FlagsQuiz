const flagsDataLink = 'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json';

const fetchCountries = async () => {
  try {
    const response = await fetch(flagsDataLink);
    const data = await response.json();
    const transformedData = data.map((country) => ({
      ...country,
      code: country.code.toLowerCase(),
    }));
    return transformedData;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

export default { fetchCountries };