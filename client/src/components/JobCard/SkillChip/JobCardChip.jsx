import React from 'react'
import styles from './jobCardChip.module.css'
const JobCardChip = (props) => {
    return (
        <div className={styles.chipBox}>
            <span>{props.selectedSkill}</span>
        </div>
    )
}

export default JobCardChip
