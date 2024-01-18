import React from 'react'
import styles from './ErrorMessage.module.css'

export default function Error({children}) {
  return (
    <p className={styles.error}>{children}</p>
  )
}
