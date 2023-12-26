import React from 'react'
import Navbanner from '../../assets/navbar.png'
import { Link } from 'react-router-dom'
import styles from './navBanner.module.css'
import recruiter from '../../assets/recruiter.png'
const NavBanner = (props) => {
  return (
    <>
      <div className={styles.navBar}>
        <img src={Navbanner} alt="" />
        <div className={styles.navOverlayContainer}>
          <p>Jobfinder</p>
          {
            props.isLogin ? <div className={styles.navOverlayText}>
            <button className={styles.logout}><Link to={'/login'}>Logout</Link></button>
            <p className={styles.recruiter}>{`Hello,${props.recruiterName}`}</p>
            <div>
              <img src={recruiter} alt="" />
            </div>
          </div> :
          <div className={styles.navOverlayText}>
            <button><Link to={'/login'}>Login</Link></button>
            <button><Link to={'/register'}>Register</Link></button>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default NavBanner
