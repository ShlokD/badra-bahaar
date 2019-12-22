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
    })
  }

  onSubmitLocation() {
    this.props.onSetLocation(this.state.enteredLocation)
  }

  render() {
    return <div><input onChange={this.onLocationInput} placeholder="Enter city name"></input><button onClick={this.onSubmitLocation}>Show me the Cities!</button></div>
  }
}

const LocationList = ({ locationList = [], doFetchWeather }) => {
  return <div>
    {locationList.map((locationItem) => {
      return <button onClick={() => doFetchWeather(locationItem.woeid)}>{locationItem.title} </button>
    })}
  </div>
}

const ForecastList = ({ weatherForecast = {} }) => {
  const { forecast = [] } = weatherForecast;

  return <div className="flex flex-row">
    {forecast.map((forecastItem) => {
      return (
        <div>
          <span>Minimum Temperature: {forecastItem.minimumTemperature}</span>
          <span>Maximum Temperature: {forecastItem.maximumTemperature}</span>
          <span>Prediction: {forecastItem.forecastType}</span>
        </div>
      );
    })}
  </div>
}


class WeatherView extends Component {
  render({ locationList, weatherForecast, doSetLocation, doFetchWeather }) {

    return (
      <div>
        <LocationInput onSetLocation={doSetLocation} />
        <LocationList locationList={locationList} doFetchWeather={doFetchWeather} />
        <ForecastList weatherForecast={weatherForecast} />
      </div>
    );
  }
}

export default connect(
  transformStoreDataToUIData,
  getDataChangers
)(WeatherView);
