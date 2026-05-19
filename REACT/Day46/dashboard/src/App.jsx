import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Member from './pages/Member'
import Navbar from './component/Navbar'
import Form from './component/Form' 
import addMonthForm from './component/AddMonthForm' 
import AddMonthForm from './component/AddMonthForm'
import OverView from './pages/OverView'
import StatMonth from './component/StatMonth'
import Register from './pages/Register'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Navbar' element={<Navbar/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Member' element={<Member/>} />
      <Route path='/OverView' element={<OverView/>} />
      <Route path='/Form' element={<Form/>} />
      <Route path='/addMonth' element={<AddMonthForm/>}/>
      <Route path='/StatMonth' element={<StatMonth/>}/>
    </Routes>
    </>
  )
}

export default App