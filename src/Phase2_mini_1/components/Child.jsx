import React, { memo } from 'react'

const Child = ({ onClick }) => {

 
        console.log("Child re-rendered..");
   


    return (
        <div>
            <button
                onClick={onClick}
                className="bg-green-500 text-white px-4 py-1 rounded"
            >
                Child Button
            </button>
        </div>
    )
}

export default memo(Child)