import React from 'react'
import styles from './filterChip.module.css'
import Cross from '../../assets/cross.svg'

const FilterChip = (props) => {
    console.log(props)
    const handleRemove = () => {
        props.removeChip(props.selectedSkill)
    }
    return (
        <div className={styles.chipBox}>
            <span>{props.selectedSkill}</span>
            <div className={styles.cross} onClick={handleRemove}>
                <img src={Cross} alt="" />
            </div>
        </div>
    )
}

export default FilterChip
