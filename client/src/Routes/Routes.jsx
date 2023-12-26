import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
import AddJob from '../pages/AddJobPage/AddJob'
import JobDescription from '../pages/JobDescriptionPage/JobDescription'
const Router = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<h1>Welcome To HireZoom! <Link to='/register'>Click me</Link></h1>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/create-job' element={<AddJob/>}></Route>
        <Route path='/job-details' element={<JobDescription/>}></Route>
     </Routes> 
    </>
  )
}

export default Router
