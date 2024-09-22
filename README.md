# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

project overview

This project is a simple React-based weather application that allows users to search for city-specific weather and view a 5-day forecast. The application uses two weather APIs to fetch current weather and forecast data.

create this app useing  - npm create vite@latestto 
to start the server - npm run dev

Features
City Search: Users can type the name of a city, and matching cities are displayed as options in a dropdown.
Current Weather Display: The application shows the current temperature, weather conditions, wind speed, and an associated weather icon.
Temperature Unit Toggle: Users can toggle between Celsius and Fahrenheit.
Local Storage: The last searched city is saved and retrieved from local storage.
5-Day Weather Forecast: The forecast for the next five days is displayed with high and low temperatures, weather conditions, and icons.
Folder Structure
The main components of the project are as follows:

CitySearch.js: Main component for searching cities and displaying current weather.
Forecast.js: Component that displays the 5-day weather forecast based on the selected city.
How to Use

CitySearch Component:
Allows the user to search for a city and fetch the weather data for that city.
Uses the OpenWeatherMap API to fetch current weather conditions.
Displays the city's name, current temperature, weather conditions, and wind speed.
Allows the user to toggle between Celsius and Fahrenheit for temperature display.
The search history is saved in local storage, so the last searched city is automatically loaded when the page is refreshed.

Forecast Component:
Displays the 5-day weather forecast for the selected city.
Fetches data from the Weatherbit API.
For each day, the component shows the day's name, high and low temperatures, and a brief weather description with an icon.

API Usage
OpenWeatherMap API:
Used for fetching current weather data.
API Endpoint: https://api.openweathermap.org/data/2.5/weather
Query parameter:
q: The city name.
APPID: The API key for authentication.

Weatherbit API:
Used for fetching the 5-day weather forecast.
API Endpoint: https://api.weatherbit.io/v2.0/forecast/daily
Query parameter:
city: The city name.
key: The API key for authentication.

How to Run
Install all dependencies by running:
npm install
Run the application:

npm start
The application will be available at http://localhost:3000/.

OpenWeatherMap API Key: Replace the APPID in CitySearch.js with your own key.
Weatherbit API Key: Replace the key in Forecast.js with your own key.

 Libraries

React: Core JavaScript library used to build the UI components.
useState and useEffect: React hooks for managing component state and lifecycle methods.


Notes:
The API keys are hardcoded for simplicity. In a real-world application, use environment variables for API keys.
Error handling is minimal. You may want to add better handling for invalid cities or failed API requests.
The temperature is fetched in Kelvin from the OpenWeatherMap API and converted to Celsius or Fahrenheit in the UI.
