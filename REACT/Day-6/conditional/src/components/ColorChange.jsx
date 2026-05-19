import React from 'react'

const ColorChange = () => {


  const[color, setColor] = useState("bg-white")

  const handleClick = () => {
    if(color === "bg-white"){
      setColor("bg-blue-500")
    } 
    if(color === "bg-blue-500"){
      setColor("bg-red-500")
    } 
  }
  return (
    <>
    <div className='bg-yellow-700 text-white p-10 flex flex-col gap-5 justify-center items-center h-100'>
     <div className={`${color} text-black p-2 w-50 h-50`}>
      Box
     </div>

     <button onclick={handleClick} className='bg-orange text-black rounded p-1 w-40 text-center'>
      click To Change Color
     </button>
    </div>


    <hr />

        <div className='bg-orange-700 text-white p-10 flex flex-col gap-5 justify-center items-center h-100'>
     <div className={`${color} text-black p-2 w-50 h-50`}>
      Box
     </div>

     <button onclick={handleClick} className='bg-orange text-black rounded p-1 w-40 text-center'>
      click To Change Color
     </button>
    </div>
    
    
    
    </>
  )
}

export default ColorChange