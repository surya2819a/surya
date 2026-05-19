import React from 'react'

const Sample = () => {
    const changeref = useRef()
    const handleClick = () => {

        changeref.current.style.backgroundColor = "blue"

    }

    return (
        <>
            <h1 ref={changeref}>hello World</h1>
            <button onClick={handleClick}>click here</button>

        </>
    )
}

export default Sample