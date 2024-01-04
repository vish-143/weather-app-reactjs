import React from 'react'
import Ptag from '../ptag'

import TempImg from '../../utils/hot-temperature.png';
import ImgComp from '../imgcomp';

import './locationweather.scss'

const LocationWeather = ({ data }) => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return (
        <div className="place">
            <div className="spec-loc">
                <i className="bi bi-geo-alt"></i>
                <Ptag value={`${data.name} / ${data.sys.country}`} />
            </div>
            <div className="date">
                <i className="bi bi-calendar-week"></i>
                <Ptag value={`${day}, ${date.getDate()} ${month} ${date.getFullYear()}`} />
            </div>
            <div className="temp">
                <div className="temp-content">
                    <Ptag value={data.main.temp} />
                    <Ptag value={`Feels Like : ${data.main.feels_like}`} />
                </div>
                <div className="temp-img">
                    <ImgComp imgsrc={TempImg} imgalt={'temperature'} imgw={110} imgh={120} />
                </div>
            </div>
        </div>
    )
}

export default LocationWeather