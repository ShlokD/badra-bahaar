export const transformStoreDataToUIData = store => {
  return {
    locationList: store.locationList,
    location: store.location,
    weatherForecast: store.weatherForecast
  };
};

export const transformForecast = forecast => {
  return {
    minimumTemperature: Math.round(forecast.min_temp),
    maximumTemperature: Math.round(forecast.max_temp),
    forecastType: forecast.weather_state_name
  };
};

export const transformWeatherForecast = weatherForecast => {
  return {
    forecast: weatherForecast.consolidated_weather.map(transformForecast)
  };
};
