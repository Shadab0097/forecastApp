import { useEffect } from "react"
import { useState } from "react"
import Forecast from "./Forecast";

const CitySearch = () => {
  // const [searchCity , setSearchCity] = useState()
  const [query, setQuery] = useState('delhi'); // To store user input
  const [filteredOptions, setFilteredOptions] = useState([]); // Store filtered dropdown options
  const [showDropdown, setShowDropdown] = useState(false); // To control dropdown visibility
  const [weatherData, setWeatherData] = useState();
  const [isCelsius, setIsCelsius] = useState(true); // State for temperature unit

  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearchWeather');
    if (lastSearch) {
      setQuery(lastSearch); // Set the last searched city as the initial search value
    }
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      try {
        if (!query) return
        fetchSearchCityWeather()
        localStorage.setItem('lastSearchWeather', query);
      } catch (err) {
        console.log(err)
      }

    }, 1000);

    return () => {
      clearTimeout(timer)
    }
  }, [query])
  //  const city_name = query
  //  const API_key = 'c2bc90986b89c535eeb27ac28fe23685'

  const fetchSearchCityWeather = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=e0009158c56d3316825e5e2f8660c458`)
    const response = await data.json()
    console.log(response)
    setWeatherData(response)
  };
  if (!weatherData) return
  // console.log(weatherData)


  const options = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia']; // Example options

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter options based on user input
    if (value.trim() === '') {
      setFilteredOptions([]);
      setShowDropdown(false);
    } else {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
      setShowDropdown(true);
    }
  };

  const handleOptionClick = (option) => {
    setQuery(option); // Set the selected option in the input
    setShowDropdown(false); // Hide the dropdown after selecting an option
  };
  const { main, name, weather } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temperature = isCelsius
    ? Math.round(main?.temp - 273.15) // Convert from Kelvin to Celsius
    : Math.round((main?.temp - 273.15) * 9 / 5 + 32); // Convert from Kelvin to Fahrenheit


  return (
    <>
      <div className="input-dropdown-container">
        <input
          type="text"
          placeholder="Type a city..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)} // Show dropdown when input is focused
        />
        {showDropdown && filteredOptions.length > 0 && (
          <ul className="dropdown">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="weather-widget">
        <div className="weather-content">
          <div className="city-name">{name}</div>
          <div className="temp-condition">
            <div className="temperature">{temperature}°{isCelsius ? 'C' : 'F'}</div>
            <div className="condition">{weather[0]?.description}</div>
          </div>
          <div className="weather-icon">
            <img src={iconUrl} alt={weather[0]?.description} /> <span>{'Wind Speed:'}{weatherData?.wind?.speed}</span>
          </div>
          <button onClick={toggleTemperatureUnit}>
            Switch to °{isCelsius ? 'F' : 'C'}
          </button>
        </div>
      </div>
      <h1 className="forecast-title">Daily Forecast</h1>
      <div className="big-container">
        <Forecast city={query} />
      </div>
    </>
  )
}

export default CitySearch;