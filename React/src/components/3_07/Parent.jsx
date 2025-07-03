import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [val, setVal] = useState(false);
  return (
    <div>
    
        <div>
            <button onClick={() => {
                setVal(!val)
                console.log("Button Clicked")
            }}>RERENDER CHILD</button>
        </div>
        <Child />
    </div>
  )
}

export default Parent