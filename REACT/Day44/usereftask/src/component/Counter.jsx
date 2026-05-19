// Previous Value Track Task
// 👉 Counter create pannunga
// 👉 Current value and previous value display pannunga using useRef

import React, { useRef } from 'react'

const Counter = () => {

    const previousValue = useRef(null)
    const currentValue = useRef(null)

    const handleCounter = ()=>{
        
        
        console.log(Number(currentValue.current.innerText )+ 1 );
        

    }

  return (
   <>
     <h1 ref={previousValue}>0</h1>
     <h1 ref={currentValue}>1</h1>
    <button onClick={handleCounter}>Add</button>
   </>
  )
}

export default Counter