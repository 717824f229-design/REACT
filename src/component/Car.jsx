import React from 'react'
import wagonR from '../assets/wagonR.jpg'
function Car(props) {
    const car={name:"WagonR",color:"Black",model:"LXI 2025",pic:wagonR}
  return (
    <div>
        <h3>Car Details</h3>
        <img src={car.pic} height="100px" width="95px"/>
        <p>Name:{car.name}</p>
        <p>Color:{car.color}</p>
        <p>Model:{car.model}</p>
       <p> Rating:{props.rating}</p>
        </div>
  )
}

export default Car