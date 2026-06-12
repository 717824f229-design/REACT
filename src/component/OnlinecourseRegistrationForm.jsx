import React from 'react'
import {useState} from 'react'
function OnlineCourseRegistrationForm() {
const[user,setUser]=useState({fname:"",
    lname:"",
    email:"",
    dob:"",
    phone:"",
    courses:"",
    cduration:""
})
const[couses,setCourses]=useState()
const[loading,setLoading]=useState(false)
const[page,setPage]=useState('user')
const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    setPage('result')
}
  return (
    <div>
        {page==='user' &&(
            <div style={{textAlign:"left"}}>
        <h1>Online Course Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
            <td><label>First Name:</label></td>
            <td><label>Last Name:</label></td>
            </tr>
            <tr>
            <td><input type="text" placeholder="Enter Your First Name" value={user.fname}
            onChange={(e)=>setUser({...user,fname:e.target.value})}/>
           </td>
            <td>
             <input type="text" placeholder="Enter Your Last Name" value={user.lname}
            onChange={(e)=>setUser({...user,lname:e.target.value})}/>
           
            </td>
            </tr>
            </table>
            <label>Email:</label>
            <br></br>
             <input type="email" placeholder="Enter Your Email Address" value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <br></br>
            <label>Date of Birth:</label><br></br>
             <input type="date" placeholder="Enter Your Date of Birth" value={user.dob}
            onChange={(e)=>setUser({...user,dob:e.target.value})}/>
            <br></br>
            <label>Phone/Mobile:</label><br></br>
             <input type="text" placeholder="Enter Your Mobile Number" value={user.phone}
            onChange={(e)=>setUser({...user,phone:e.target.value})}/>
            <br></br>
            <label>Choose the course you want to enroll in: </label><br></br>
             <select value={user.courses} onChange={(e)=>setUser({...user,courses:e.target.value})}>
                <option value="">Select a course</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Javascript">JavaScript</option>
                <option value="React">React</option>
                <option value="DBMS">DBMS</option>
             </select>
            <br></br>
            <label>Preferred Course Duration:</label><br></br>
            <input type="radio" name="duration" value="6 Months" onChange={(e)=>setUser({...user,cduration:e.target.value})}/>6 Months<br></br>
            <input type="radio" name="duration" value="12 Months" onChange={(e)=>setUser({...user,cduration:e.target.value})}/>12Months<br></br>
        <button type="submit" style={{backgroundColor:"blue"}}>Apply To Enroll</button>
        </form>
        </div>
        )}
        {page==='result' && loading && (
            <div>
                <h1>Registered Candidate Information</h1>
                <p><strong>First Name:</strong>{user.fname}</p>
                <p><strong>Last Name:</strong>{user.lname}</p>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>Date of birth:</strong>{user.dob}</p>
                <p><strong>Phone/Mobile:</strong>{user.phone}</p>
                <p><strong>Selected Courses:</strong>{user.courses}</p>
                <p><strong>Preferred Course Duration:</strong>{user.cduration}</p>
           </div>     
        )}
    </div>
  )
}

export default OnlineCourseRegistrationForm
