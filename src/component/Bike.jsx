import React from 'react'
import bikes from './bikes.js'
function Bike() {
  return (
    <div>
        <h3>Bike Details</h3>
        <div class="container">
        {bikes.map((bike,index)=>{
          return(
          <article key={index}>
        <p><img src={bike.url} height="120px" width="120px" alt="Bike"/></p>
        <h4>Model:{bike.name}</h4>
        <h4>Color:{bike.color}</h4>
        <h4>Price:{bike.price}</h4>
        </article>
          )
        })}
        </div>
    </div>
  )
}

export default Bike
