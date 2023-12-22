import React from 'react'
import SignUpForm from '../../components/Form/SignUpForm/SignUpForm'
import Banner from '../../components/Banner/Banner'
import styles from './register.module.css'
const Register = () => {
  return (
    <>
      <div className={styles['login-page']}>
        <div className={styles['form']}>
          <SignUpForm />
        </div>
        <div className={styles['banner']}>
          <Banner />
        </div>
      </div>

    </>
  )
}

export default Register
