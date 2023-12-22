import React,{useState} from 'react'
import styles from './loginForm.module.css'
import { loginUser } from '../../../apis/Auth'
const LoginForm = () => {

  const[loginData,setLoginData] = useState({
    email:'',
    password:''
  })
  const handleInput = (e) => {
    const {name,value} = e.target
    setLoginData((prevData) => ({
      ...prevData,
      [name] : value
    }))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await loginUser(loginData)
    console.log(response.data)
    if(response) {
      const newUser = {
        token:response.data.token,
        userName:response.data.recruiterName
      }
      var newUserJSON = JSON.stringify(newUser);
      localStorage.setItem('token',newUserJSON)
    }
  }
  return (
    <>
      <div className={styles['login-form']}>
        <div className={styles['title']}>
          <h1>Already have an account?</h1>
          <p>your personal job finder is here</p>
        </div>
        <form className={styles["input-area"]} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder='Email'
            name='email'
            onChange={handleInput}
            required
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={handleInput}
            required
          />
          <button type="submit" className={styles['signup-btn']}>Sign in</button>
        </form>
        <p>Don’t have an account?  <a href="/register">sign Up</a></p>
      </div>
    </>
  )
}

export default LoginForm
