import styles from './Logo.module.css'

export default function Logo({onClick}) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
        <img className={styles.logo} src="./images/Logo.svg" alt="Logo" />
        <span className={styles.title}>Wheater App</span>
    </div>
  )
}
