import React from 'react'
import styles from './search.module.css'
import SearchIcon from '../../assets/search.svg'
const Search = ({onSearchChange}) => {
    return (
        <div className={styles.search_bar}>
            <div className={styles.search_icon}>
                <img src={SearchIcon} alt=""/>
            </div>
            <input type="text" placeholder='Type any job title' onChange={onSearchChange} />
        </div>
    )
}

export default Search
