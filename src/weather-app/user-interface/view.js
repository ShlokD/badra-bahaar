import { h, Component } from "preact";
import { connect } from "redux-zero/preact";

import { getDataChangers } from "../application-model/changers";
import { transformStoreDataToUIData } from "../application-model/transformers";
import "./style.css";

const weatherChar = {
  Snow: "0x1F328"
};

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
    <div className="flex flex-row flex-wrap justify-evenly items-center w-100 h-40 pt4">
      {locationList.map(locationItem => {
        return (
          <button
            className="button-reset bw2 text-center b--solid f4 fw4 pa4 bg-transparent"
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
    <div className="flex flex-row h-60 w-100 justify-evenly">
      {forecast.map(forecastItem => {
        const weatherCharCode = weatherChar[forecastItem] || "0x1F328";
        return (
          <div className="flex flex-column pa4 bg-light-yellow mt2 mb2 items-center">
            <span className="f-3">
              {forecastItem.minimumTemperature} -{" "}
              {forecastItem.maximumTemperature}
            </span>
            <span className="f-5">{String.fromCodePoint(weatherCharCode)}</span>
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
        <div className="w-100 flex flex-column">
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
