import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
import AddJob from '../pages/AddJobPage/AddJob'
const Router = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<h1>Welcome To HireZoom!</h1>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/create-job' element={<AddJob/>}></Route>
     </Routes> 
    </>
  )
}

export default Router
