import { useEffect, useState } from "react"
import Temprature from "./Temprature";
import WeatherIcon from "./WeatherIcon";


// eslint-disable-next-line react/prop-types
function Forecast({ city }) {
    const [forecast, setForecast] = useState()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const ForecastapiKey = import.meta.env.VITE_API_KEY_FORECASTAPI;
    useEffect(() => {
        let timer = setTimeout(() => {
            if (!city) return
            getForecast()

        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [city])

    const getForecast = async () => {
        try {
            const data = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},&key=${ForecastapiKey}`)
            const responnse = await data.json()
            setForecast(responnse)
        } catch (err) {
            console.log(err.message)
        }
    }
    const fiveForecasts = forecast?.data?.slice(0, 5)
    if (!fiveForecasts) return
    console.log(fiveForecasts)


    return (
        <>
            {fiveForecasts.map((forecast, index) => {
                return (<div className="fiveDay_container" key={index} >
                    <div className="forecast-container">
                        <h2 className="day-name">{dayNames[new Date(forecast?.datetime).getDay()]}</h2>
                        <Temprature temp={forecast} />
                        <div className="weather-icon">
                            <WeatherIcon foreCastIcon={forecast} />
                        </div>
                    </div>
                </div>)
            })}


        </>
    )
}

export default Forecast