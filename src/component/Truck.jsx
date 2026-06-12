import React from 'react'
import trucks from './trucks.js'
function Truck() {
  return (
    <div>
         <h3>Truck Details</h3>
        <div class="container">
        {trucks.map((truck,index)=>{
          return(
          <article key={index}>
         <p><img src={truck.url} height="120px" width="120px" alt="Truck"/></p>
        <h4>Model:{truck.name}</h4>
        <h4>Color:{truck.color}</h4>
        <h4>Price:{truck.price}</h4>
        </article>
          )
        })}
        </div>
    </div>
  )
}

export default Truck
