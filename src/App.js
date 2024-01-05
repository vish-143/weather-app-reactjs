import React, { useState, createContext } from "react";

import TimeLocation from './components/timer_location/timelocation';
import Nav from './components/nav';
import Location from './pages/location';
import Home from "./pages/home";
import ErrorPage from "./components/404/error";

import './app.scss'

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
          setting.loct !== 'err' && setting.loct ? <Nav theme={true} /> : <Nav theme={false} />
        }
        <TimeLocation />
        {
          setting.loct === 'err' ? <ErrorPage /> : setting.loct !== 'err'  && setting.loct  ? <Location /> : <Home />
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
