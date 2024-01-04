import React from 'react'
import ListComp from '../list'

const WeatherDetails = ({ data }) => {
    const calculatesun = (unix) => {
        let date = new Date(unix * 1000);
        const convert = date.toTimeString().split(' ');
        return convert[0];
    }

    const calculateTime = (val) => {
        let sunset = '';
        if (+val[0] > 12) {
            let calc = val[0] - 12;
            sunset = '0' + calc + ':' + val[1] + ':' + val[2];
        } else {
            sunset = val[0] + ':' + val[1] + ':' + val[2];
        }
        return sunset;
    }
    let sunrise = calculateTime(calculatesun(data.sys.sunrise).split(':'));
    let sunset = calculateTime(calculatesun(data.sys.sunset).split(':'));

    const getDirection = (deg) => {

        const directions = [
            ['North', <i className="bi bi-arrow-up-circle"></i>],
            ['North East', <i className="bi bi-arrow-up-right-circle"></i>],
            ['East', <i className="bi bi-arrow-right-circle"></i>],
            ['South East', <i className="bi bi-arrow-down-right-circle"></i>],
            ['South', <i className="bi bi-arrow-down-circle"></i>],
            ['South West', <i className="bi bi-arrow-down-left-circle"></i>],
            ['West', <i className="bi bi-arrow-left-circle"></i>],
            ['North West', <i className="bi bi-arrow-up-left-circle"></i>]
        ];

        const index = Math.round((deg % 360) / 45);
        return directions[index % 8];
    };

    return (
        <div className={`details`}>
            <ListComp first={<i className="bi bi-sunrise"></i>} sec={`Sunrise: ${sunrise} AM`} />
            <ListComp first={<i className="bi bi-sunset"></i>} sec={`Sunset: ${sunset} PM`} />
            <ListComp first={<i className="bi bi-droplet-half"></i>} sec={`Humidity: ${data.main.humidity}%`} />
            <ListComp first={<i className="bi bi-wind"></i>} sec={`WindSpeed: ${data.wind.speed} k/hr`} />
            <ListComp first={<i className="bi bi-arrow-up"></i>} sec={`Pressure: ${data.main.pressure}mb`} />
            <ListComp first={<i className="bi bi-compass"></i>} sec={`Directions: ${getDirection(data.wind.deg)[0]}`} third={getDirection(data.wind.deg)[1]} />
        </div>
    )
}

export default WeatherDetails