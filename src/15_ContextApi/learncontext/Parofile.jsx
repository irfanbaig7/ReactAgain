import React, { useContext } from 'react'
import { UserNameContext } from './UserContext';

const Parofile = () => {

    const userName = useContext(UserNameContext);

  return (
    <div>
        <h3>profile component</h3>
        <p>User : {userName}</p>
    </div>
  )
}

export default Parofile