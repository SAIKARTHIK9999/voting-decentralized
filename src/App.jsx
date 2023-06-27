import React from 'react'
import LoginPage from './components/LoginPage'
import RegistrationForm from './components/RegistrationForm'
import HomePage from './components/HomePage'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm/>}/>
          <Route path='/homepage' element={<HomePage />}/>
        </Routes>
    </div>
  )
}

export default App