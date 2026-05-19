import React from 'react'

const ThemeChange = () => {

  const [theme, setTheme] = useState(false)
  const ThemeChange = () => {
    setTheme(!theme)
  }

  return (
    <>
    
    <div className={theme?'bg-black text-white p-2':'bg-white text-black p-2'}>
      <button onclick={ThemeChange} className='bg-white text-black p-2 rounded'>{theme ? 'Light' : 'Dark'}</button>


    </div>
    
    
    </>
  )
}

export default ThemeChange