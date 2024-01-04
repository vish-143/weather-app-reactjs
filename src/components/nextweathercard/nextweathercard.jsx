import React, { useContext } from 'react'
import { UserContext } from '../../App';
import Ptag from '../ptag'

import DarkCloud from '../../utils/dark cloud.png';
import ImgComp from '../imgcomp';

import './nextweathercard.scss';

const NextWeather = ({ data }) => {
  const location = useContext(UserContext);
  const date = data.dt_txt.split(' ');
  const arr = date[1].split(':');
  console.log(arr);
  let current_time = '';
  let timeZone = 'AM';
  if (+arr[0] > 12) {
    arr[0] = arr[0] - 12;
    current_time = arr.join(':');
    timeZone = 'PM';
  } else if (+arr[0] === 0 || +arr[0] === 12) {
    if (+arr[0] === 12)
      timeZone = 'PM'
    arr[0] = 12;
    current_time = arr.join(':');
  } else {
    current_time = arr.join(':');
  }

  const arr_day = date[0].split('-')
  return (
    <div className={`col weather-card ${location.setting.theme === 'light' ? 'dark-border' : 'light-border'}`}>
      <div className="card-img">
        <div className={`card-img-inner rounded rounded-circle weather-image-bg theme-${location.setting.icon}`}>
          <ImgComp imgsrc={DarkCloud} imgalt={'cloudy'} imgw={50} imgh={50} />
        </div>
        <Ptag value={data.weather[0].description} />
      </div>
      <div>
        <div className={`card-temp theme-text-${location.setting.icon}`}>
          <p>{data.main.temp} &deg;C</p>
        </div>
        <div className="card-date">
          <Ptag value={`${arr_day[1]}/${arr_day[2]}/${arr_day[0]} ,`} />
        </div>
        <div className="card-time">
          <Ptag value={`${current_time} ${timeZone} `} />
        </div>
      </div>

    </div>
  )
}

export default NextWeather