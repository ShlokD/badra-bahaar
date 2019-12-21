import { h } from "preact";
import { Provider } from "redux-zero/preact";
import WeatherView from "./user-interface/view";
import makeWeatherStore from "./application-model/sources";

export default () => (
  <Provider store={makeWeatherStore()}>
    <WeatherView />
  </Provider>
);
