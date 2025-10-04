import React, { memo } from 'react'

const ChildComponent = memo(({ onClick }) => {

        console.log("Child Rendered");

        return (
            <div>
                <button onClick={onClick}>Incremnet from child</button>
            </div>
        )
    }
)


export default ChildComponent