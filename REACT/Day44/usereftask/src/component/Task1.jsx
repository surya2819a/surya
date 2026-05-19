import React, { useRef } from 'react'

//  Input Focus Task
// 👉 Create an input field and a button
// 👉 Button click panna → input field automatic focus aaganum



const Task1 = () => {

const inputRef = useRef(null)
const handleFocus = ()=>{

    inputRef.current.style.border = "2px solid red"

}

  return (
    <>
        <div>
            <input ref={inputRef} type="text" placeholder='Enter the Text' />
            <button onClick={handleFocus}>Focus</button>
        </div>
    </>
  )
}

export default Task1