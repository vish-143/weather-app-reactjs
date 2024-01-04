import React, { useState,useContext } from 'react'
import { UserContext } from '../../App';

import './switch.scss'

const SwitchComp = () => {
    const location = useContext(UserContext);
    const [theme, setTheme] = useState(true);
    const showTheme = () => {
        setTheme(!theme);
        location.setSetting((p) => ({
            ...p,
            theme:  location.setting.theme === 'light' ? 'dark' : 'light'
          }))
    }
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={theme} onChange={showTheme}/>
        </div>
    )
}

export default SwitchComp