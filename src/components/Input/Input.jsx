import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import styles from './Input.module.css';

export default function Input({isLoading, value, onChange}) {
  return (
    <div className={styles.wrapper}>
      <input 
        className={styles.input} 
        placeholder='Enter your location' 
        autoFocus={true}
        onChange={onChange}
        value={value}
      />
      {isLoading && <Loader/>}
      {!isLoading && <Search/>}
    </div>
  )
}
