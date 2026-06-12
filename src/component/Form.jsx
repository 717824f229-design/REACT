import React from 'react'
import {useState} from 'react'
function Form() {
  const[user,setUser]=useState({name:"",
    password:"",
    email:"",
    dob:""})
    const [page,setPage]=useState('user')
  const [loading,setLoading]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
  setPage('result');
}
  return (
    <div>
      {page==='user' &&(
        <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder="Enter Name:" value= {user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
        <br></br><br></br>
    <label>Password:</label>
     <input type="password" placeholder="Enter Password:" value= {user.password} on Change={(e)=>setUser({...user,password:e.target.value})}/>
     <br></br><br></br>
     <label>Email:</label>
      <input type="email" placeholder="Enter Email:" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
      <br></br><br></br>
      <label>Date Of Birth:</label>
      <input type="date" placeholder="Enter Date Of Birth:" value={user.dob} onChange={(e)=>setUser({...user,dob:e.target.value})}/>
      <br></br><br></br>
      <button type="submit">SEND</button>
      </form>
      </div>
      )}
      {page==='result' && loading && (
      <div>
      <h1>User Info</h1>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Password:</strong>{user.password}</p>
      <p><strong>Email:</strong>{user.email}</p>
      <p><strong>Date Of Birth:</strong>{user.dob}</p>
      </div>)}
    </div>
  )
}

export default Form
