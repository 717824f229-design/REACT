import React from 'react'
import chocolates from './chocolates'
function Chocolate() {
  return (
    <div>
    <h2>Chocolate Details</h2>
    <div className='container'>{
chocolates.map((chocolate,index)=>(
    <article key={index}>
        <img src={chocolate.url} height="120px" width="120px"/>
        <p>{chocolate.name}</p>
        <p>{chocolate.price}</p>
    </article>
))
    }
        
        </div>
        </div>
  )
}

export default Chocolate