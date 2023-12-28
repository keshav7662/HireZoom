import React from 'react'
import styles from './Banner.module.css'
import BannerImg from '../../assets/Banner.png'
const Banner = () => {
  return (
    <>
      <div className={styles['banner']}>
        <img src={BannerImg} alt="Banner image" />
        <div className={styles.overlayText}>Your personal Job Finder</div>
      </div>
    </>
  )
}

export default Banner
