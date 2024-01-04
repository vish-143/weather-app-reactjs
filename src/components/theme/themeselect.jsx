import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import './themeselect.scss';

const ThemeSelect = () => {
    const [bg, setBg] = useState('white')
    const location = useContext(UserContext);
    const changeTheme = (e) => {
        setBg(e)
        location.setSetting((p) => ({
            ...p,
            icon: e
        }))
    }
    return (
        <select className={`form-select form-select-sm ${bg}`} aria-label=".form-select-sm example" onChange={event => changeTheme(event.target.value)}
            defaultValue={bg}>
            <option value="none"></option>
            <option value="skyblue" className='skyblue'></option>
            <option value="yellow" className='yellow' ></option>
            <option value="pink" className='pink' ></option>
            <option value="green" className='green' ></option>
            <option value="red" className='red' ></option>
        </select>
    )
}

export default ThemeSelect