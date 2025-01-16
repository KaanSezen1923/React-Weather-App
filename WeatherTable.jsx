import "../css/Weather.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const WeatherTable = ({ data }) => {
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

  if (!data || !data.list) {
    return <p>No forecast data available.</p>;
  }

  // Filter the data to include only one entry per day
  const dailyData = data.list.filter((item, index, self) => {
    const currentDay = new Date(item.dt * 1000).toLocaleDateString();
    const isFirstOfDay = self.findIndex(
      (entry) => new Date(entry.dt * 1000).toLocaleDateString() === currentDay
    ) === index;
    return isFirstOfDay;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Icon</th>
          <th>Condition</th>
          <th>Min Temp (°C)</th>
          <th>Max Temp (°C)</th>
        </tr>
      </thead>
      <tbody>
        {dailyData.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? "table-active" : ""}>
            <td>{new Date(item.dt * 1000).toLocaleDateString()}</td>
            <td>
              <img
                src={allIcons[item.weather[0]?.icon] || ""}
                alt={item.weather[0]?.description || "Weather icon"}
                className="weather-icon"
              />
            </td>
            <td>{item.weather[0]?.description || "N/A"}</td>
            <td>
              {item.main?.temp_min
                ? (item.main.temp_min ).toFixed(1)
                : "N/A"}
            </td>
            <td>
              {item.main?.temp_max
                ? (item.main.temp_max ).toFixed(1)
                : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;




