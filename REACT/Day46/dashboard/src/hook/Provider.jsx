import React from 'react'
import Create from './Create'

const Provider = ({children}) => {

    const currentUser = localStorage.getItem('currentUser') || ''
    const memberStorageKey = currentUser ? `chitMember-${currentUser}` : 'chitMember'
    const getMem = JSON.parse(localStorage.getItem(memberStorageKey)) || []





  return (
    <>
    <Create.Provider value = {getMem}>

    {children}

    </Create.Provider>

    </>
  )
}

export default Provider