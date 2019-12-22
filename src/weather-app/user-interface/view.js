import { h, Component } from "preact";
import { connect } from "redux-zero/preact";

import { getDataChangers } from "../application-model/changers";
import { transformStoreDataToUIData } from "../application-model/transformers";
import "./style.css";

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredLocation: ""
    };

    this.onLocationInput = this.onLocationInput.bind(this);
    this.onSubmitLocation = this.onSubmitLocation.bind(this);
  }

  onLocationInput(ev) {
    this.setState({
      enteredLocation: ev.target.value
    });
  }

  onSubmitLocation(ev) {
    ev.preventDefault();
    this.props.onSetLocation(this.state.enteredLocation);
  }

  render() {
    return (
      <form
        className="flex justify-center items-center"
        onSubmit={this.onSubmitLocation}
      >
        <input
          type="text"
          className="button-reset br4 pa2 bw0 fw5 f2"
          onChange={this.onLocationInput}
          placeholder="Enter city name"
        ></input>
      </form>
    );
  }
}

const LocationList = ({ locationList = [], doFetchWeather }) => {
  return (
    <div className="flex flex-column justify-evenly items-center h-100 w-40 pt4">
      {locationList.map(locationItem => {
        return (
          <button
            className="button-reset bw2 text-center b--solid f4 fw4 pt4"
            onClick={() => doFetchWeather(locationItem.woeid)}
          >
            {locationItem.title}{" "}
          </button>
        );
      })}
    </div>
  );
};

const ForecastList = ({ weatherForecast = {} }) => {
  const { forecast = [] } = weatherForecast;

  return (
    <div className="flex flex-column w-60 justify-evenly">
      {forecast.map(forecastItem => {
        return (
          <div className="flex flex-column">
            <span>Minimum Temperature: {forecastItem.minimumTemperature}</span>
            <span>Maximum Temperature: {forecastItem.maximumTemperature}</span>
            <span>Prediction: {forecastItem.forecastType}</span>
          </div>
        );
      })}
    </div>
  );
};

class WeatherView extends Component {
  render({ locationList, weatherForecast, doSetLocation, doFetchWeather }) {
    return (
      <div className="h-100 flex flex-column pt6">
        <LocationInput onSetLocation={doSetLocation} />
        <div className="w-100 flex flex-row">
          <LocationList
            locationList={locationList}
            doFetchWeather={doFetchWeather}
          />
          <ForecastList weatherForecast={weatherForecast} />
        </div>
      </div>
    );
  }
}

export default connect(
  transformStoreDataToUIData,
  getDataChangers
)(WeatherView);
