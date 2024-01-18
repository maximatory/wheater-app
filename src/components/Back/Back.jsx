import styles from './Back.module.css'

export default function Back({onClick}) {
  return (
    <button className={styles.back} onClick={onClick}>Back to search</button>
  )
}
