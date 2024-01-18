import React, {useState, useEffect} from 'react'
import styles from './Clock.module.css';

export default function Clock({location, getTimeOfDay}) {
  const [time, setTime] = useState(new Date());
  const correct = Number(location.utc_offset.slice(0, -2))
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    const TimesofDay = hours > 6 && hours < 18 ? 'Day' : 'Night';
    getTimeOfDay(TimesofDay)
  }, [])

  const hours = time.getHours() - 3 + correct;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();


  const timeString = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  return (
    <div className={styles.time}>{timeString}</div>
  )
}
