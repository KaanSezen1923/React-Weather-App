const API_KEY = "a3a873d2ee8e86ad81d424806417eb69";
const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const WEEKLY_FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${CURRENT_WEATHER_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching weather data:", err);
    throw err;
  }
};

export const getWeeklyForecast = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEEKLY_FORECAST_URL}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching forecast data:", err);
    throw err;
  }
};

