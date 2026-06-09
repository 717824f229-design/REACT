
import './App.css'

import Contact from './component/Contact'
import Employee from './component/Employee'
import Greeting from './component/Greeting'
import Notice from './component/Notice'
import Project from './component/Project'
import Welcome from './component/Welcome'
import Chocolate from './component/Chocolate'
import User from './component/User'


function App() {
  return (
    <>
     <Greeting/>
     <Welcome/>
     <br></br>
     <Employee name="James" id="WIPRO7839A2" dept="Global IT infrastructure"/>
    <br></br>
    <Project/>
    <br></br>
    <Notice/>
    <br></br>
    <Contact/>
    <br></br>

    <User/>
<br></br>
    <Chocolate/>
    </>

)
}

export default App
