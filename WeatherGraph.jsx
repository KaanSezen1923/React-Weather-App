import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "../css/Weather.css";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeatherGraph = ({ data }) => {
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

  // Prepare data for the chart
  const labels = dailyData.map((item) => new Date(item.dt * 1000).toLocaleDateString());
  const minTemps = dailyData.map((item) => (item.main.temp_min).toFixed(1)); // Convert from Kelvin to Celsius
  const maxTemps = dailyData.map((item) => (item.main.temp_max ).toFixed(1)); // Convert from Kelvin to Celsius

  // Chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Min Temp (°C)",
        data: minTemps,
        borderColor: "rgba(54, 162, 235, 1)", // Blue color for min temperature
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Light blue for background
        fill: true,
        tension: 0.4, // Smooth curve
      },
      {
        label: "Max Temp (°C)",
        data: maxTemps,
        borderColor: "rgba(255, 99, 132, 1)", // Red color for max temperature
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red for background
        fill: true,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options configuration
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Daily Min & Max Temperatures",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}°C`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          stepSize: 5, // Set step size for y-axis ticks
        },
      },
    },
  };

  return (
    <div className="weather-graph">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default WeatherGraph;
