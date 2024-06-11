import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import JobDetails from './components/JobDetails'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<Home/>}/>
      <Route path='/jobs/:id' element={<JobDetails/>}/>
    </Routes>
    
  )
}

export default App