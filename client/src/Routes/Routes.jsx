import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'
const Router = () => {
  return (
    <>
     <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
     </Routes> 
    </>
  )
}

export default Router
