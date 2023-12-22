import React from 'react'
import LoginForm from '../../components/Form/LoginForm/LoginForm'
import Banner from '../../components/Banner/Banner'
import styles from './login.module.css'
const Login = () => {
    return (
        <>
            <div className={styles['login-page']}>
                <div className={styles['form']}>
                    <LoginForm />
                </div>
                <div className={styles['banner']}>
                    <Banner />
                </div>
            </div>

        </>
    )
}

export default Login
