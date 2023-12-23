import React from 'react'
import AddJobBannerImg from '../../assets/addjob.png'
import styles from './addJobBanner.module.css'

const addJobBanner = () => {
  return (
    <>
      <div className= {styles['banner']}>
        <img src={AddJobBannerImg} alt="Banner image" />
        {/* <div className={styles.overlayText}>Your personal Job Finder</div> */}
      </div>
    </>
  )
}

export default addJobBanner
