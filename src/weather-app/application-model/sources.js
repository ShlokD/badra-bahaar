import createStore from "redux-zero";

export const getInitialState = () => ({
  location: "",
  locationList: [],
  weatherForecast: []
});

const makeWeatherStore = () => createStore(getInitialState);

export default makeWeatherStore;
