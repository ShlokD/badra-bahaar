import { h, Component } from "preact";
import { connect } from "redux-zero/preact";

import { getDataChangers } from "../application-model/changers";
import { transformStoreDataToUIData } from "../application-model/transformers";
import "./style.css";

const weatherChar = {
  Snow: "0x1F328",
  Thunderstorm: "0x26C8",
  "Heavy Rain": "0x1F327",
  "Light Rain": "0x1F327",
  Showers: "0x1F326",
  "Heavy Cloud": "0x2601",
  "Light Cloud": "0x1F324",
  Clear: "0x2600"
};

const DEGREE_SYMBOL = String.fromCharCode(0x00b0);

export const Loader = () => <div className="mv4 pv4 loading"></div>;

class LocationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredLocation: "",
      loading: false
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
    this.setState({ loading: true });
    this.props
      .onSetLocation(this.state.enteredLocation)
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="flex flex-column items-center">
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
        {loading && <Loader />}
      </div>
    );
  }
}

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(woeid) {
    const { doFetchWeather } = this.props;
    this.setState({ loading: true });
    return doFetchWeather(woeid).then(() => this.setState({ loading: false }));
  }

  render() {
    const { locationList = [] } = this.props;
    const { loading } = this.state;

    return (
      <div className="flex flex-column items-center">
        <div className="flex flex-row flex-wrap justify-evenly items-center w-100 h-40 pt4">
          {locationList.map(locationItem => {
            return (
              <button
                className="cursor-pointer button-reset bw2 text-center b--solid f4 fw4 pa4 bg-transparent br4 shadow-5 mt4"
                onClick={() => this.fetchWeather(locationItem.woeid)}
              >
                {locationItem.title}{" "}
              </button>
            );
          })}
        </div>
        {loading && <Loader />}
      </div>
    );
  }
}

const ForecastList = ({ weatherForecast = {} }) => {
  const { forecast = [] } = weatherForecast;
  return (
    <div className="flex flex-row h-80 w-100 justify-evenly pa2 mt5">
      {forecast.map(
        ({ forecastType, minimumTemperature, maximumTemperature, date }) => {
          const weatherCharCode = weatherChar[forecastType] || "0x2600";
          return (
            <div className="flex flex-column pa2 bg-light-gray ma2 items-center w-20 br3 shadow-5">
              <span>{date}</span>

              <span className="f-5 dark-blue">
                {String.fromCodePoint(weatherCharCode)}
              </span>

              <span className="f4">
                {`${minimumTemperature}${DEGREE_SYMBOL}C`} -{" "}
                {`${maximumTemperature}${DEGREE_SYMBOL}C`}
              </span>
            </div>
          );
        }
      )}
    </div>
  );
};

class WeatherView extends Component {
  render({ locationList, weatherForecast, doSetLocation, doFetchWeather }) {
    return (
      <div className="h-100 flex flex-column pa6">
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
