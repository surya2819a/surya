import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import ConditionalRendering from '../components/ConditionalRendering'
import ColorChange from '../components/ColorChange'
import ThemeChange from '../components/ThemeChange'
import ToggleProcess from '../components/ToggleProcess'

const AppRoutes = () => {
  return (
    <Routes>
            <Route path='/' element={<App />} />   
            <Route path='/conditional' element={<ConditionalRendering />} /> 
            <Route path='/color' element={<ColorChange />} /> 
            <Route path='/theme' element={<ThemeChange />} />
            <Route path='/toggle' element={<ToggleProcess />} />      
    </Routes>
  )
}

export default AppRoutes