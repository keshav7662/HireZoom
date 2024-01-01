import React,{useEffect} from 'react'
import Router from './Routes/Routes'
import './App.css'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  return (
    <>
    <ToastContainer />
      <Router/>
    </>
  )
}

export default App

