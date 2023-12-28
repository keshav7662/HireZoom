import React, { useContext } from 'react'
import Navbanner from '../../assets/navbar.png'
import { Link } from 'react-router-dom'
import styles from './navBanner.module.css'
import recruiter from '../../assets/recruiter.png'
import { AuthContext } from '../../Routes/Routes'
const NavBanner = () => {
  const { isLogin, recruiterName } = useContext(AuthContext)
  return (
    <>
      <div className={styles.navBar}>
        <img src={Navbanner} alt="" />
        <div className={styles.navOverlayContainer}>
          <p>Jobfinder</p>
          {
            isLogin ? (<div className={styles.navOverlayText}>
              <button className={styles.logout}><Link to={'/login'}>Logout</Link></button>
              <p className={styles.recruiter}>{`Hello,${recruiterName}`}</p>
              <div>
                <img src={recruiter} alt="" />
              </div>
            </div>)
              :
              (<div className={styles.navOverlayText}>
                <button><Link to={'/login'}>Login</Link></button>
                <button><Link to={'/register'}>Register</Link></button>
              </div>)
          }
        </div>
      </div>
    </>
  )
}

export default NavBanner
