import React, { useContext } from 'react'

import Fog from '../../utils/fog.png'
import ImgComp from '../imgcomp'
import Ptag from '../ptag'
import { UserContext } from '../../App'

const WeatherMid = ({data}) => {
  const location = useContext(UserContext);

    return (
        <div className="feel">
            <div className={`feel-img shadow-lg feel-image-bg theme-${location.setting.icon} }`}>
                <ImgComp imgsrc={Fog} imgalt={data[0].main} imgw={100} imgh={100} />
            </div>
            <div className={`feel-content theme-text-${location.setting.icon}`}>
                <Ptag value={data[0].main} />
            </div>

        </div>
    )
}

export default WeatherMid