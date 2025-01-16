import React from 'react';
import '../css/Weather.css';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const WeatherCard = ({ data }) => {
  if (!data || !data.weather || !data.main || !data.wind) {
    return <p>Error: Invalid weather data.</p>;
  }

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const icon = allIcons[data.weather[0]?.icon] || clear_icon;
  const humidity = data.main.humidity ?? "N/A";
  const windSpeed = data.wind.speed ?? "N/A";
  const temperature = Math.floor(data.main.temp );
  const location = data.name ?? "Unknown";

  return (
    <div className="weather">
      <img src={icon} alt="Weather Icon" className="weather-icon" />
      <p className="temperature">{temperature}°C</p>
      <p className="location">{location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="Humidity Icon" />
          <div>
            <p>{humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="Wind Speed Icon" />
          <div>
            <p>{windSpeed} m/s</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WeatherCard;
