import {Container,Nav,Navbar} from 'react-bootstrap';
import Navlinks from './Navlinks';
import Aboutus from './Aboutus';
import Wastemanagement from './Wastemanagement';
import Businesspage from '../pages/Businesspage';
import { Route,Routes } from "react-router-dom";


function Topnavbar(props) {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
      <Container>
      <Navbar.Brand>
            <img
              src={props.Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="ODWD"
            />
        </Navbar.Brand>
        <Navbar.Brand>OnDemandWasteDisposal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav>
            <Navlinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
          <Route  path="/aboutus" element={<Aboutus />} />
          <Route  path="/wastemanagement" element={<Wastemanagement />} />
          <Route  path="/Businesspage" element={<Businesspage />}  />
    </Routes>
    </>
    
  );
}

export default Topnavbar;