import React from 'react'

function Project() {
    const projects=["Advanced Threat Protection (Wipro Security Operations)","Legacy Mainframe Optimization (Financial Services Client)","AI/ML for Predictive Maintenance (Industrial Client)","Data Privacy Compilance Audit"]
  return (
    <div style={{border:"2px solid black",textAlign:"left"}}>
        <h3>Current Projects</h3>
        <ul>
            {projects.map((p,index)=>(
            <li key={index}>{p}</li>
            ))}
        </ul>
    </div>
  )
}

export default Project