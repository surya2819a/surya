import React, { useState } from 'react'

const FormHand = () => {
    const [TakeName, setTakeName] = useState("")
    const [Data, setData] = useState("")
    const handleChange = (e) => {
    setTakeName(e.target.value)
}
const handleClick =(e)=>{
    setData(TakeName)   
}
  return (
    <>
        <input type="int" onChange={handleChange} placeholder='Enter the No'/>
        <h1>{Data}</h1>
        <button onClick={handleClick}>Click here!!</button>
    </>
  )
}

export default FormHand