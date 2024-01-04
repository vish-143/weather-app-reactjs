import React, { useContext } from 'react'
import { UserContext } from '../../App';
import Logo from '../../utils/sun.png'

import './nav.scss'

import ImgComp from '../imgcomp'
import Ptag from '../ptag'
import SwitchComp from '../switch/switch'
import ThemeSelect from '../theme/themeselect'

const Nav = ({theme}) => {
const location = useContext(UserContext);
    return (
        <div className={`nav ${location.setting.theme}`}>
            <div className="leftnav">
                <ImgComp imgsrc={Logo} imgalt={'logo'} imgw={100} imgh={70} />
                <Ptag value={'Weather'} />
            </div>
            <div className="rightnav">
                {
                    theme && <ThemeSelect />
                }
                <SwitchComp />
            </div>
        </div>
    )
}

export default Nav