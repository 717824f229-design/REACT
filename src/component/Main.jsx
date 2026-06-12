import {Link, NavLink,Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Bike from './component/Bike.jsx'
import Car from './component/Car.jsx'
import Truck from './component/Truck.jsx'
function Navbar(){
  return(
    <nav>
      <Link to="/Bike">Bike</Link>|{" "}
      <Link to="/Car">Car</Link>|{" "}
      <Link to="/Truck">Truck</Link>|{" "}
    </nav>
  )
}
function Main() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <div style={{padding:"0 20px"}}>
        <Routes>
          <Route path="/" element={<h2>Welcome</h2>}/>
          <Route path="/Bike" element={<Bike/>}/>
          <Route path="/Car" element={<Car/>}/>
          <Route path="/Truck" element={<Truck/>}/>
        </Routes>
      </div>
    </Router>
   
   
    </>
  )
}

export default Main
