import React from 'react'

function Greeting() {
    const hour=new Date().getHours();
    const greeting=hour<12?"Good Morning!":hour<17?"Good Afternoon!":"Good Evening!";

  return (
    <div>{greeting}!</div>
  )
}

export default Greeting