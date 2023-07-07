import React from 'react'
import { Home, Registration } from './components'
import { Routes, Route } from 'react-router-dom'
import { Biometrics } from './ts/auth'
import { Blockchain } from './ts/pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path='/biometrics' element={<Biometrics />} />
        <Route path='/blockchain' element={<Blockchain />} />
      </Routes>
    </div>
  )
}

export default App