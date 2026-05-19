// Clear Input Task
// 👉 Input field + button
// 👉 Button click panna → input value clear aaganum using useRef

import React, { useRef } from 'react'

const Task3 = () => {

    const clearRef = useRef(null)

    const handleClear =()=>{

        clearRef.current.value = null

    }

  return (
   <>
    <div>
        <input ref={clearRef} type="text" placeholder='Enter the text' />
        <button onClick={handleClear}>Clear</button>
    </div>
   </>
  )
}

export default Task3