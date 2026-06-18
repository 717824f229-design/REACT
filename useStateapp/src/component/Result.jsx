import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import students from "./students";
function Result(){
    const{regno}=useParams()
    const navigate=useNavigate()
    const student=students.find(
        (st)=>st.regno===regno
    )
    if(!student){
        return(
        <div>
        <h2>Student Not Found!</h2>
        <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>
        )
    }
    return(
        <div className="result">
            <h1>Student Result</h1>
            <h2>Name:{student.name}</h2>
            <h3>Year:{student.year}</h3>
            <h3>Department:{student.dept}</h3>
            <table border="1">
                <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>
                {student.subjects.map((sub,index)=>(
                    <tr key={index}>
                         <td>{sub.name}</td>
                         <td>{sub.marks}</td>
                    </tr>
                ))}
                
            </table>
            <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>
    )
}
export default Result