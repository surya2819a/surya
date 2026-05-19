// Get Input Value Task
// 👉 Create a form with one input
// 👉 Submit pannumbothu → value console la print aaganum (useRef only, no useState)

import React, { useRef } from 'react'

const Task2 = () => {

    const logRef = useRef(null)

    const handleChange = ()=>{
        console.log(logRef.current.value);
        
    }

  return (
   <>
    <div style={{background:"blue",padding:"30px", margin:"40px", width:"500px", display:"flex" , justifyContent:"center" , borderRadius:"10px"}}>
        <input style={{height:"30px" , width:"300px"}} ref={logRef} onChange={handleChange} type="text" placeholder='Enter The text' />
    </div>
   </>
  )
}

export default Task2