import React from 'react'

function Greeting() {
    const hour=new Date().getHours();
    const greeting=hour<12?"Good Morning!":hour<17?"Good Afternoon!":"Good Evening!";
<<<<<<< HEAD
  return (
    <div>
        <h2>{greeting}</h2>
    </div>
=======

  return (
    <div>{greeting}!</div>
>>>>>>> 3e2cb6334c45754f84cfaf26b8a72727d6c75f68
  )
}

export default Greeting