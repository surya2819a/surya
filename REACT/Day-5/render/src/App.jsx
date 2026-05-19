import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Rendering from './components/Rendering'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rendering" element={<Rendering />} />
    </Routes>

    
    
    </>
  )
}

export default App