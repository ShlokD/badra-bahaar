import {
  transformStoreDataToUIData,
  transformForecast,
  transformWeatherForecast
} from "./transformers";

describe("transformStoreDataToUIData", () => {
  let actual;
  let expected;
  let mockStore;

  test("It correctly transforms store data to UI data", () => {
    mockStore = {
      locationList: [{ title: "Mumbai" }],
      location: "Mum",
      weatherForecast: [{ minTemperature: 10 }]
    };

    expected = {
      locationList: [{ title: "Mumbai" }],
      location: "Mum",
      weatherForecast: [{ minTemperature: 10 }]
    };

    actual = transformStoreDataToUIData(mockStore);
    expect(actual).toEqual(expected);
  });
});

describe("transformForecast", () => {
  let actual;
  let expected;
  let forecast;

  test("It correctly transforms store data to UI data", () => {
    forecast = {
      min_temp: 10,
      max_temp: 20,
      weather_state_name: "Snow",
      applicable_date: "2019-1-1"
    };

    expected = {
      minimumTemperature: 10,
      maximumTemperature: 20,
      forecastType: "Snow",
      date: "1 - 1 - 2019"
    };

    actual = transformForecast(forecast);
    expect(actual).toEqual(expected);
  });
});

describe("transformWeatherForecast", () => {
  let actual;
  let expected;
  let weatherForecast;

  test("It correctly transforms store data to UI data", () => {
    weatherForecast = {
      consolidated_weather: [
        {
          min_temp: 10,
          max_temp: 20,
          weather_state_name: "Snow",
          applicable_date: "2019-1-1"
        }
      ]
    };

    expected = {
      forecast: [
        {
          minimumTemperature: 10,
          maximumTemperature: 20,
          forecastType: "Snow",
          date: "1 - 1 - 2019"
        }
      ]
    };

    actual = transformWeatherForecast(weatherForecast);
    expect(actual).toEqual(expected);
  });
});
