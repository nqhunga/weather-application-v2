function mapWeather(value) {
  const forecastWeather = value.forecast.forecastday;
  const locationWeather = value.location;
  const currentWeather = value.current;
  const forecastData = [];
  forecastWeather.map((day) => {
    const fixDate = day.date.slice(5, day.date.length);
    const dayData = {
      date: fixDate,
      weatherData: day.day
    };
    return forecastData.push(dayData);
  });
  return {
    forecast: forecastData,
    location: locationWeather,
    current: currentWeather
  };
}

export default async function getWeather(cityName) {
  try {
    const response = await fetch(`/forecast/:${cityName}`);
    const results = await response.json();
    return mapWeather(results);
  } catch (e) {
    throw e;
  }
}

