import styles from './Details.module.css';
import details from '../../Data/details'

export default function Details({ current }) {
    return (
        <div className={styles.details}>
            <h2 className={styles.details__title}>Today's weather details</h2>
            <div className="details__wrapper">

                {details.map(item => {
                    return (
                        <div className={styles.details__item} key={item.id}>
                            <div className={styles.details__property}>
                                <img src={`./images/details_icons/${item.svg}`} alt="icon" />
                                <span>{item.name}</span>
                            </div>
                            <div className={styles.details__value}>{current[item.current]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
