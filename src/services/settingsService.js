const SETTINGS_KEY = "FLAGS_GAME_SETTINGS";

const defaultSettings = {
  timeBetweenRounds: 2000,
  numberOfRounds: 5,
};

const getSettings = () => {
  const storedSettings = localStorage.getItem(SETTINGS_KEY);
  return storedSettings ? JSON.parse(storedSettings) : defaultSettings;
};

const updateSettings = (newSettings) => {
  const settings = { ...getSettings(), ...newSettings };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export default {
  getSettings,
  updateSettings,
};