import React from 'react'
import ImgComp from '../../components/imgcomp'

import HomeImage from '../../utils/weather-icon.png'
import './home.scss'
import Ptag from '../../components/ptag'
const Home = () => {
    return (
        <div className='home'>
            <ImgComp imgsrc={HomeImage} imgalt={'weather-app'}  imgw={500} imgh={500} />
            <Ptag value={'Welcome! Enter a location to get weather information.'} />
        </div>
    )
}

export default Home