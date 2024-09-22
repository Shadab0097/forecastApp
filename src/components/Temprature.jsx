/* eslint-disable react/prop-types */
const Temprature = ({ temp }) => {
    return (
        <>
            <h3 className="temperature high-temp"> <span>High Temp:</span> {temp?.high_temp}°</h3>
            <h3 className="temperature low-temp"><span>low Temp:</span> {temp?.low_temp}°</h3>
        </>
    )
}

export default Temprature