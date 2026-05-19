import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
      

<div className="bg-blue-600 text-white p-3 flex justify-between">
<div className="mx-10">
    Logo
</div>
<div className="mx-10 flex gap-10">
    <Link to="/">ArrayLoop</Link>
    <Link to="/Effect">EffectProcess</Link>
    <Link to="/Form">FormHandling</Link>

</div>

</div>

  )
}

export default NavBar