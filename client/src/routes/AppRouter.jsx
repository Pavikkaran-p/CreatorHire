import React from 'react'
import { BrowserRouter, Route, Router, Routes  } from 'react-router-dom'
import JobDetails from '../components/JobDetails'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/jobs/:id' element={<JobDetails/>}/>
    </Routes>
  )
}

export default AppRouter