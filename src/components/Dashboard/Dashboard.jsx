import React, {useState} from 'react'
import styles from './Dashboard.module.css'
import MainBlock from '../MainBlock/MainBlock'
import Details from '../Details/Details'


export default function Dashboard({data}) {
  const [timeOfDay, setTimeOfDay] = useState(null)
  const current = data.current;
  const location = data.location;

  function getTimeOfDay(time){
    setTimeOfDay(time)
}

  return (
    <div className={styles.wrapper}>
        <MainBlock current={current} location={location} getTimeOfDay={getTimeOfDay} timeOfDay={timeOfDay}/>
        <Details current={current}/>
    </div>
  )
}
