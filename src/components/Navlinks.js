import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
 function Navlinks(){
     return(
         <>
        
         <Link to="/Aboutus" className="nav-link">About us</Link>
        <Link to="/Wastemanagement" className="nav-link">Waste Management</Link>
        <Link to="/Businesspage" className="nav-link">Business Page</Link>
        
         </>
        
     )
 }

 export default Navlinks;