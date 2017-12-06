import axios from "axios";

const API_KEY = "f360afe42cb97f6789e4f07b6b24ed51";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function FetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
