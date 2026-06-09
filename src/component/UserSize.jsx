import React from 'react'
import {useState} from 'react'
function UserSize() {
  const [size, setSize] = useState(16)
  return (
    <div>
        <p style={{fontSize:`${size}px`}}>Welcome to KCE</p>
        <button onClick={()=>setSize(size+2)}>
            👍
        </button>
        <button onClick={()=>setSize(size-2)}>👎</button>
    </div>
  )
}

export default UserSize