import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import WeatherCard from "./WeatherCard";
import WeatherTable from "./WeatherTable";
import WeatherGraph from "./WeatherGraph";
import { getWeather, getWeeklyForecast } from "../services/api";
import "../css/Weather.css";

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const currentWeather = await getWeather(query);
      setWeatherData(currentWeather);

      const forecast = await getWeeklyForecast(
        currentWeather.coord.lat,
        currentWeather.coord.lon
      );
      setForecastData(forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <form onSubmit={handleSearch} className="search-form">
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="city-search"
            disableClearable
            options={["Adana", "Ankara", "İzmir"]} // Add more cities if needed
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter city"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </Stack>
      </form>

      {error && <p className="error">{error}</p>}
      {weatherData && (
        <>
          <div className="weather-result">
            <WeatherCard data={weatherData} />
          </div>
          <div>
            <WeatherTable data={forecastData} />
          </div>
          <div>
            <WeatherGraph data={forecastData} />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
