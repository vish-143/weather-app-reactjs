import React, { useState, createContext } from "react";

import Nav from './components/nav';
import TimeLocation from './components/timer_location/timelocation';

import './app.scss'
import Location from './pages/location';
import Home from "./pages/home";

export const UserContext = createContext()

function App() {
  const [setting, setSetting] = useState({
    theme: 'light',
    loct: '',
    icon: ''
  });
  return (
    <UserContext.Provider value={{ setting, setSetting }} >
      <div className={`App ${setting.theme}`}>
        {
          setting.loct ? <Nav theme={true} /> : <Nav theme={false}/>
        }
        
        <TimeLocation />
        {
          setting.loct ? <Location /> : <Home />
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
