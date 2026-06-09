import React from 'react'

function Employee(props) {
  return (
    <div style={{border:"2px solid black",textAlign:"left"}}>
        <h3>Employee Profile</h3>
        <p>Name:{props.name}</p>
        <p>Employee ID:{props.id}</p>
        <p>Department:{props.dept}</p>
        </div>
  )
}

export default Employee