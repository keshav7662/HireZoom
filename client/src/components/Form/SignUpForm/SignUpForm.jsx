import React, { useState, useContext } from 'react'
import styles from './signUpForm.module.css'
import { registerUser } from '../../../apis/Auth';
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../../Routes/Routes';
const signUpForm = () => {
  const { setIsLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(formData)
    if (response) {
      const newUser = {
        token: response.data.token,
        recruiterName: response.data.recruiterName
      }
      var newUserJSON = JSON.stringify(newUser);
      localStorage.setItem('token', newUserJSON)
      setIsLogin(true)
      navigate('/all-jobs')
    }
  }
  return (
    <>
      <div className={styles['login-form']}>
        <div className={styles['title']}>
          <h1>Create an account</h1>
          <p>your personal job finder is here</p>
        </div>
        <form className={styles["input-area"]} onSubmit={handleSubmit}>
          <input
            name='fullName'
            type="text"
            placeholder='Fullname'
            onChange={handleInput}
            required
          />
          <input
            name='email'
            type="email"
            placeholder='Email'
            onChange={handleInput}
            required
          />
          <input
            name='mobile'
            type="tel"
            placeholder='Mobile'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            type="password"
            placeholder='Password'
            onChange={handleInput}
            required
          />
          <div className={styles.terms}>
            <input
              type="checkbox"
              name="terms"
              required
            />
            <label for="terms"> By creating an account, I agree to our terms of use and privacy policy</label>
          </div>
          <button type="submit" className={styles['signup-btn']}>Create Account</button>
        </form>
        <p>Already have an account?  <Link to='/login'>Sign in</Link></p>
      </div>
    </>
  )
}

export default signUpForm
