import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Company from './Company'
function FetchUser() {
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))

    })
  return (
     <>
    <div>
        FetchUser</div>
       
        <table style={{border:"1px solid white",margin:"auto"}}>
            <th style={{border:"1px solid white",margin:"auto"}}>Name</th>
            <th style={{border:"1px solid white",margin:"auto"}}>Username</th>
            <th style={{border:"1px solid white",margin:"auto"}}>Email</th>
            <th style={{border:"1px solid white",margin:"auto"}}>Company</th>
            {user.map((u,index)=>(
                <tr>
            <td style={{border:"1px solid white",margin:"auto"}} key={index}>{u.name}</td>
            <td style={{border:"1px solid white",margin:"auto"}} key={index}>{u.username}</td>
            <td style={{border:"1px solid white",margin:"auto"}} key={index}>{u.email}</td>
            <td style={{border:"1px solid white",margin:"auto"}} key={index}>{u.company.name},{u.company.catchPhrase},{u.company.bs}</td>
                </tr>
            ))}
        </table>
        
        </>
  )
}

export default FetchUser
