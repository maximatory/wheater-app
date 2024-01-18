import { useState, useCallback } from 'react';
import styles from './SearchLocation.module.css';
import Input from '../Input/Input';
import Geolocation from '../Geolocation/Geolocation';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function SearchLocation({isLoading, getData, data, onClick, isGeolocation}) {
  const [inputValue, setInputValue] = useState('')

  const valueMemoized = useCallback((e)=>{
    setInputValue(e.target.value)
  }, [setInputValue])

  return (
    <div className={styles.wrapper}>
      <form 
        className={styles.form}
        onSubmit={(e)=>{
          e.preventDefault()
          getData(inputValue);
          setInputValue('')
        }}
      >
        <h2 className={styles.title}>Welcome to <span>wheater app</span></h2>
        <span className={styles.subtitle}>Select a location to see the weather forecast</span>

        <div className={styles.search}>
          <Input 
            isLoading={isLoading} 
            value={inputValue} 
            onChange={valueMemoized}
          />
          <Geolocation onClick={onClick} isGeolocation={isGeolocation}/>
        </div>
        {(data !== null && 'success' in data) && 
          (<ErrorMessage>Please enter a valid city</ErrorMessage>)
        }
      </form>
    </div>
  )
}
