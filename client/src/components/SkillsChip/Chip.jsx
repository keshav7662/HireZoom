import React from 'react'
import styles from './chip.module.css'
const Chip = (props) => {
  return (
    <div className={styles.chips}>
      <span>{props.skill}</span>
    </div>
  )
}

export default Chip
