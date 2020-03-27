import { transformWeatherForecast } from "./transformers";

export const getDataChangers = store => {
  return {
    doSetLocation: (state, location) => {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search?query=${location}`,
        { mode: "cors" }
      )
        .then(response => response.json())
        .then(responseJSON => {
          return Object.assign({}, state, {
            locationList: responseJSON,
            location
          });
        });
    },
    doFetchWeather: (state, woeid) => {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`,
        { mode: "cors" }
      )
        .then(response => response.json())
        .then(responseJSON => {
          return Object.assign({}, state, {
            weatherForecast: transformWeatherForecast(responseJSON)
          });
        });
    },
  };
};
