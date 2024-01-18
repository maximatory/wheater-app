import Clock from '../Clock/Clock';
import styles from './MainBlock.module.css'
import wheaterNames from '../../Data/wheaterNames';
import getCurrentDate from '../../Help/getCurrentDate';

export default function MainBlock({current, location, getTimeOfDay, timeOfDay}) {
    const localTime = location.localtime_epoch * 1000
    const currentDate = getCurrentDate(localTime)
    
    const wheaterCode = current.weather_code
    const wheaterName = wheaterNames[wheaterCode]
    const iconName = (timeOfDay === 'Day' && wheaterCode === 113) ? 'Sunny' :  wheaterName;
    

    const bgStyle = {
        backgroundImage: `url(./images/main_bg/Weather=${wheaterName}&Moment=${timeOfDay}.png)`
    }
    
    return (
        <div 
            className={styles.main}
            style={bgStyle}
        >
            <div className={styles.main__up}>
                <div className={styles.location}>
                    <div className={styles.location__city}>{location.country}</div>
                    <div className={styles.location__country}>{`${location.name}, ${currentDate}`}</div>
                </div>
                <Clock location={location} getTimeOfDay={getTimeOfDay}/>
            </div>

            <div className={styles.main__down}>
                <div className={styles.main__temperature}>
                {`${current.temperature}ºc`}
                </div>
                <div className={styles.main__icon}>
                    <img src={`/images/main_icons/${iconName}.png`} alt="icon" />
                </div>
            </div>
        </div>
    )
}

