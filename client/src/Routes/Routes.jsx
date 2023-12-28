import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
import AddJob from '../pages/AddJobPage/AddJob'
import JobDescription from '../pages/JobDescriptionPage/JobDescription'
import Home from '../pages/HomePage/Home'
export const AuthContext = createContext()

const Router = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [recruiterName, setRecruiterName] = useState('')
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setIsLogin(true)
      setRecruiterName(token.recruiterName)
    }
  })

  return (
    <>
      <AuthContext.Provider value={{ isLogin: isLogin, recruiterName: recruiterName }}>
        <Routes>
          <Route path='/' element={<h1>Welcome To HireZoom! <Link to='/register'>Click me</Link></h1>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/create-job' element={<AddJob />}></Route>
          <Route path='/job-details' element={<JobDescription />}></Route>
          <Route path='/all-jobs' element={<Home />}></Route>
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default Router
