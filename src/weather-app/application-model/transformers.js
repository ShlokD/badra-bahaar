export const transformStoreDataToUIData = store => {
  return {
    locationList: store.locationList,
    location: store.location,
    weatherForecast: store.weatherForecast
  };
};

export const transformForecast = forecast => {
  const forecastDate = new Date(forecast.applicable_date);
  return {
    minimumTemperature: Math.round(forecast.min_temp),
    maximumTemperature: Math.round(forecast.max_temp),
    forecastType: forecast.weather_state_name,
    date: `${forecastDate.getDate()} - ${forecastDate.getMonth() +
      1} - ${forecastDate.getFullYear()}`
  };
};

export const transformWeatherForecast = weatherForecast => ({
  forecast: weatherForecast.consolidated_weather.map(transformForecast)
});
