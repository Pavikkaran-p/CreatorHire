import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import JobDetails from './components/JobDetails'
import Header from './components/Header'
import LoginHr from './components/auth/LoginHr'
import LoginUser from './components/auth/LoginUser'
import RegisterHr from './components/auth/RegisterHr'
import RegisterUser from './components/auth/RegisterUser'
import ProfileUpdateForm from './components/ProfileUpdateForm'
import About from './pages/About'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/jobs/:id' element={<JobDetails/>}/>
        <Route path='/loginhr' element={<LoginHr/>}/>
        <Route path='/loginuser' element={<LoginUser/> }/>
        <Route path='/registerhr' element={<RegisterHr/>}/>
        <Route path='/registeruser' element={<RegisterUser/> }/>
        <Route path='/updateprofile' element={<ProfileUpdateForm/>}/>
      </Routes>
    
    </>
  )
}

export default App