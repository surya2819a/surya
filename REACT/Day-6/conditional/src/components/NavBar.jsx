import React from 'react'
import { Link } from 'react-router-dom' 

const NavBar = ({ colortheme }) => {
  return (
<>
<div className={colortheme?'bg-blue-100 text-black p-3 flex justify-between items-center':'bg-gray-800 text-white p-3 flex justify-between items-center'}>
    <div className='mx-10' >Logo</div>
    <div className ='flex gap-10' mx-10>
    
        <Link to="/">ConditionalRendering</Link>
        <Link to="/colorchange">colorchange</Link>
        <Link to="/theme">ThemeChange</Link>
        <Link to="/toggle">toggle</Link>
    </div>
</div>

</>
  )
}

export default NavBar