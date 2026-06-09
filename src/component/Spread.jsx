import React from 'react'
import {useState} from 'react'
function Spread() {
  const[user,setUser]=useState({name:'',age:''})
  return (
    <div>
        <input type='text' placeholder='Name' onChange={(e)=>setUser({...user,name:e.target.value})}/><br></br>
        <input type='text' placeholder='Age' onChange={(e)=>setUser({...user,age:e.target.value})}/><br></br>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
    </div>
  )
}

export default Spread