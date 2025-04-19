import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Attendence from './pages/Attendence'
import Feedback from './pages/Feedback'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/attendence' element={<Attendence />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </>
  )
}

export default App
