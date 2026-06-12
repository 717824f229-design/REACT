import React from 'react'
import cars from './cars.js'
function Car() {
  return (
    <div>
       <h3>Car Details</h3>
        <div class="container">
        {cars.map((car,index)=>{
          return(<article key={index}>
         <p><img src={car.url} height="120px" width="120px" alt="Car"/></p>
        <h4>Model:{car.name}</h4>
        <h4>Color:{car.color}</h4>
        <h4>Price:{car.price}</h4>
        </article>)
        })}
        </div>
    </div>
  )
}

export default Car
