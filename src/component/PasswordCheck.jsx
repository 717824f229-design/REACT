import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
function PasswordCheck() {
    const[pass,setPass]=useState("");
    const [msg,setMsg]=useState("");
    useEffect(()=>{
        if(pass.length<5){
            setMsg("Too Short!");
        }
        else{
            setMsg("Good Password!");
        }
        
    },[pass])
    
  return (
    <>
        <input type='password' 
        onChange={(e)=>setPass(e.target.value)}
            placeholder='Enter Password'
        />
        <p>{msg}</p>
    </>
  )
}

export default PasswordCheck
