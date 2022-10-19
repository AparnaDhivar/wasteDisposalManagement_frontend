import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
 function Navlinks(){
     return(
         <>
        
        
        <Link to="/businesspage" className="nav-link">Business Page</Link>
        <Link to="/orderhere"></Link>
         </>
        
     )
 }

 export default Navlinks;