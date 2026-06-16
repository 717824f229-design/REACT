import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Home(){
    const[regno,setRegno]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate()
    const searchResult=()=>{
          if(regno.trim()===""){
            setError("Register Number Required")
            return;
          }
          navigate(`/result/${regno}`)
    }
    return(
        <div className="home">
        <h1>Karpagam College of Engineering</h1>
        <h2>Student Result Portal</h2>
        <input type="text" 
        value={regno} 
        placeholder="Enter Register Number:" 
        onChange={(e)=>setRegno(e.target.value)}
        />
        <button onClick={searchResult}>View Result</button>
         {error && <p style={{ color: "red" }}>{error}</p>}

        </div>
    )
}
export default Home
