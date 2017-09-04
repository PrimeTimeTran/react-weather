const API_KEY = 'd2f75dfb3921840411528b894f9dd863';
const ROOT_URL = `http://API.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(searchTerm) {
  const url = `${ROOT_URL}&q=${searchTerm},us`;
  return {
    type: FETCH_WEATHER
  };
}
