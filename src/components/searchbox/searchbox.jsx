import React, { useState, useContext } from 'react'

import { UserContext } from '../../App'

import './searchbox.scss';

const SearchBox = () => {
  const location = useContext(UserContext);
  const [loc, setLoc] = useState('');
  const setLocation = () => {
    location.setSetting((p) => ({
      ...p,
      loct: loc
    }))
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      setLocation()
    }
  }

  return (
    <div className='searchbox'>
      <input className="form-control form-check-input-bg" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setLoc(e.target.value)} onKeyUp={handleKeyPress} />
      <i className="bi bi-search" onClick={setLocation} style={{ color: location.setting.theme === 'dark' ? 'white' : 'black' }}></i>
    </div>
  )
}

export default SearchBox