import React, { useContext, useEffect, useState } from 'react'

import LocationWeather from '../../components/location-main/locationweather';

import WeatherMid from '../../components/location-main/weathermid';
import WeatherDetails from '../../components/location-main/weatherdetails';
import Ptag from '../../components/ptag';
import NextWeather from '../../components/nextweathercard/nextweathercard';

import ErrorPage from '../../components/404/error';
import { UserContext } from '../../App'

import axios from "axios";

import Home from '../home';
import MapComp from '../../components/map/mapcomp';

import './location.scss';

const Location = () => {
  const location = useContext(UserContext);
  const { loct } = location.setting;
  const [weather, setWeather] = useState();
  const [forecast, setForeCast] = useState();
  const [err, setError] = useState(true);
  const currentDate = new Date().getDate()
  const currentHour = new Date().getHours();

  const getNext24hourForecast = (data) => {
    const filterd = data.filter((e) => {
      return ((+(e.dt_txt.split(' ')[0].split('-')[2]) > currentDate) || (+(e.dt_txt.split(' ')[1].split(':')[0]) > currentHour))
    })
    setForeCast(filterd.slice(0, 8));
  }

  useEffect(() => {
    if (loct) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loct}&appid=10a251fd2b2db596384a2cd822ae016d&units=metric`)
        .then(response => {
          if (response.status === 200)
            setWeather(response.data)
          setError(true);
        })
        .catch(res => {
          console.log(res)
          setError(false)
        });

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${loct}&appid=10a251fd2b2db596384a2cd822ae016d&units=metric`)
        .then(response => {
          if (response.status === 200)
            getNext24hourForecast(response.data.list);
          setError(true);
        })
        .catch(res => {
          console.log(res)
          setError(false);
        });
    }
  }, [loct])

  return (
    <div className='location-main'>
      {
        err && weather && forecast ?
          <>
            <div className={`weather-main ${location.setting.theme} theme-${location.setting.icon}`}>
              <div className="weather-1">
                <LocationWeather data={weather} />
                <WeatherMid data={weather.weather} />
              </div>

              <div className="weather-2">
                <MapComp data={weather.coord} />
                <WeatherDetails data={weather} />
              </div>

            </div>
            <div className="next-weathers">
              <div className="next-p">
                <Ptag value={'Next 24 hours Forecast'} />
              </div>
              <div className="weather-cards row row-cols-8 row-auto">
                {
                  forecast.map((e) => {
                    return <NextWeather key={e.dt} data={e} />
                  })
                }
              </div>

            </div>
          </>
          : err ? <Home /> : <ErrorPage />
      }
    </div>
  )
}

export default Location