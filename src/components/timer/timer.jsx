import React, { useEffect, useState } from 'react'
import Ptag from '../ptag';

const Timer = () => {
  const current_time = new Date();
  const [hour, setHour] = useState(current_time.getHours());
  const [sec, setSec] = useState(current_time.getSeconds());
  const [shift, setShift] = useState('');
  useEffect(() => {
    setHour(current_time.getHours());
    if (hour >= 6 && hour < 12) setShift('Good Morning')
    else if (hour >= 12 && hour < 18) setShift('Good Afternoon')
    else if (hour >= 18 && hour < 24) setShift('Good Evening')
    else setShift('Good Night')
    const runTime = setInterval(() => {
      if (sec < 59) setSec(current_time.getSeconds() + 1);
      else setSec(0)
    }, 1000)
    return () => clearInterval(runTime);
  }, [current_time.getSeconds()])
  return (
    <div className='timerDiv'>
      <Ptag value={`${shift} ${current_time.toLocaleTimeString()}`} />
    </div>
  )
}

export default Timer