import styles from './Geolocation.module.css'

export default function Geolocation({onClick, isGeolocation}) {
  return (
    <button 
        disabled={!isGeolocation}
        onClick={(e)=>{
        e.preventDefault()
        onClick()
      }}
      className={isGeolocation ? styles.btn : styles.disabled}
    ></button>
  )
}
