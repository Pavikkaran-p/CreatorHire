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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/Landing'
import PostJob from './components/PostJob'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/jobs' element={<Home/>}/>
        <Route path='/postjob' element={<PostJob/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/jobs/:id' element={<JobDetails/>}/>
        <Route path='/loginhr' element={<LoginHr/>}/>
        <Route path='/loginuser' element={<LoginUser/> }/>
        <Route path='/registerhr' element={<RegisterHr/>}/>
        <Route path='/registeruser' element={<RegisterUser/> }/>
        <Route path='/updateprofile' element={<ProfileUpdateForm/>}/>
      </Routes>
      <ToastContainer autoClose={1200} />
    </>
  )
}

export default App