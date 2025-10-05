import React from 'react'
import { UserNameContext } from './UserContext'
import NavaBar from './NavaBar'

const Head = () => {

    const userName = "irfan"


  return (
    <UserNameContext.Provider value={userName}>
       <div>
            <h1>With context api...</h1>
            <NavaBar />
       </div>
    </UserNameContext.Provider>
  )
}

export default Head