# React Weather Application

A modern, responsive weather application built with React that provides current weather information and forecasts for cities worldwide. The application features a clean UI with interactive components including a weather card, forecast table, and temperature graphs.

![Weather App Screenshot]

## Features

- Current weather conditions display
- 5-day weather forecast
- Interactive temperature graph
- Responsive design
- City search with autocomplete
- Visual weather indicators
- Temperature, humidity, and wind speed measurements
- Error handling and loading states

## Live Demo

[Add your live demo link here]

## Technologies Used

- React
- Material-UI
- Chart.js
- OpenWeather API
- CSS3
- JavaScript (ES6+)

## Prerequisites

Before running this project, you need:

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeather API key:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

## Project Structure

```
weather-app/
├── src/
│   ├── assets/          # Weather icons and images
│   ├── components/      # React components
│   ├── css/            # Stylesheets
│   ├── services/       # API services
│   └── App.js          # Main application component
├── public/
│   └── index.html
└── package.json
```

## Components

### WeatherApp
- Main component handling the application state and user interactions
- Manages API calls and data flow
- Renders child components

### WeatherCard
- Displays current weather information
- Shows temperature, location, humidity, and wind speed
- Dynamic weather icons based on conditions

### WeatherTable
- Presents 5-day forecast in a tabular format
- Includes date, weather icon, conditions, and temperature range

### WeatherGraph
- Interactive line chart showing temperature trends
- Displays minimum and maximum temperatures
- Built with Chart.js

## API Integration

The application uses the OpenWeather API for weather data:
- Current weather endpoint: `api.openweathermap.org/data/2.5/weather`
- Forecast endpoint: `api.openweathermap.org/data/2.5/forecast`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm build`: Builds the app for production
- `npm eject`: Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- OpenWeather API for weather data
- Material-UI for UI components
- Chart.js for data visualization
- Weather icons from [icon source]

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/weather-app](https://github.com/yourusername/weather-app)

---

Don't forget to replace placeholder content (your username, links, etc.) with your actual project information.
