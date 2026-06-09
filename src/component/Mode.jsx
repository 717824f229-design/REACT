import React from 'react'
import {useState} from 'react'
function Mode() {
    const[mode,setMode]=useState(false)
  return (
    <div style={{backgroundColor:mode?'black':'white',color:mode?'white':'black',height:"100vh"}}>
        <button onClick={()=>setMode(!mode)}>
            Toggle Theme</button>
            <p>Hello World!</p>
            </div>
  )
}

export default Mode