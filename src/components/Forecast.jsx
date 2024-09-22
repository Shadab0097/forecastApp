import { useEffect, useState } from "react"
import Temprature from "./Temprature";
import WeatherIcon from "./WeatherIcon";


// eslint-disable-next-line react/prop-types
function Forecast({ city }) {
    const [forecast, setForecast] = useState()
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    useEffect(() => {
        let timer = setTimeout(() => {
            try {
                if (!city) return
                getForecast()

            } catch (err) {
                console.log(err)
            }

        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [city])

    const getForecast = async () => {
        const data = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},&key=c0254820927e43dba2e179ecd98f056f`)
        const responnse = await data.json()
        setForecast(responnse)
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