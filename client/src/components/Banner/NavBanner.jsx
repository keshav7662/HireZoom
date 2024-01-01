import React, { useContext } from 'react'
import Navbanner from '../../assets/navbar.png'
import { Link } from 'react-router-dom'
import styles from './navBanner.module.css'
import HireZoomLogo from '../../assets/hirezoom-logo.png'
import { AuthContext } from '../../Routes/Routes'
const NavBanner = () => {
  const { isLogin, recruiterName,setIsLogin } = useContext(AuthContext)
  const handleLogOut = () => {
    localStorage.removeItem('token')
    setIsLogin(false)
  }
  return (
    <>
      <div className={styles.navBar}>
        <img src={Navbanner} alt="" />
        <div className={styles.navOverlayContainer}>
          <p>HireZoom</p>
          {
            isLogin ? (<div className={styles.navOverlayText}>
              <button className={styles.logout} onClick={handleLogOut}>Logout</button>
              <p className={styles.recruiter}>{`Hello,${recruiterName}`}</p>
              <div className={styles.companyLogo}>
                <img src={HireZoomLogo} alt="" />
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
