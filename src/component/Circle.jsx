import React from 'react'
function radiusCalc(radius){
    return 3.14*radius*radius;
}
function Circle(props) {
  return (
    <div>
        <h2>Circle Area : {radiusCalc(5)}</h2>
        <p>Circle color: {props.color}</p>
        </div>
  )
}

export default Circle