import React from 'react'
import Parofile from './Parofile'

// Step 3: Consume Context (in deeply nested component)

const NavaBar = () => {

  return (
    <div style={{ border: "2px solid gray", padding: "10px", marginTop: "10px" }}>
        <h2>NavaBar</h2>
        <Parofile />
    </div>
  )
}

export default NavaBar