import createStore from "redux-zero";

export const getInitialState = () => ({
  location: "",
  weather: {}
});

const makeWeatherStore = () => createStore(getInitialState);

export default makeWeatherStore;
