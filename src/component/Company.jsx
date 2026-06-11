import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Company() {
    const[company,setCompany]=useState([])
    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=>setCompany(data))
    },[setCompany])
  return (
    <>
    <div>Company</div>
    {company.map((c,index)=>(
        <div key={index}>{c.name}, {c.catchPhrase}, {c.bs}</div>
    ))}
    </>
  )
}

export default Company
