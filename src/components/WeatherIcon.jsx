/* eslint-disable react/prop-types */
const WeatherIcon = ({ foreCastIcon }) => {
    return (
        <>
            <span>{foreCastIcon?.weather?.description}</span>: <img src={`https://www.weatherbit.io/static/img/icons/${foreCastIcon.weather.icon}.png`} alt="Weather Icon" />
        </>
    )
}

export default WeatherIcon