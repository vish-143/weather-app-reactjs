import React, { useContext } from 'react'
import SearchBox from '../searchbox/searchbox'
import Timer from '../timer/timer'
import { UserContext } from '../../App';

import './time_location.scss';

const TimeLocation = () => {
const location = useContext(UserContext);
    return (
        <div className={`time_location ${location.setting.theme}`}>
            <Timer />
            <SearchBox />
        </div>
    )
}

export default TimeLocation