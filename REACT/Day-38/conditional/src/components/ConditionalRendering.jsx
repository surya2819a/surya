import { useState } from 'react'


const ConditionalRendering = () => {

  const [value, setValue] = useState(false)

  const handleclick = () => {

    setValue(!value)  
    
  }
  return (
  <>
  <div className="bg-green-200 text-black p-10 flex flex-col gap-5 items-center justify-center    ">
    <h1>Conditional Rendering</h1>


    <p>{value&&<p className="bg-red-500 p-2">This is True</p>}</p>
    

    <button onClick={handleclick} className="bg-amber-300 p-1 rounded w-30">click a Button </button>
    
  </div>




  </>

  )
  
}

export default ConditionalRendering