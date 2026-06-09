import React from 'react'
import wipro from'../assets/wipro.png'
function Contact() {
  return (
    <div style={{textAlign:"center"}}>
        <table style={{marginLeft:"auto",marginRight:"auto"}}><tr>
        <td><p>Contact:james.wipro@wipro.com|+91-XXXXXXXXXX</p>
        
        <p>WIPRO TECHNOLOGY|Wipro Ltd. Global Operations</p></td>
       <td rowSpan={2}><img src={wipro} height="60px" width="60px"/></td> </tr>
        </table></div>
  )
}

export default Contact