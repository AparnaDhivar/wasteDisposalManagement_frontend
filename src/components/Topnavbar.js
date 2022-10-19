import {Container,Nav,Navbar} from 'react-bootstrap';
import Navlinks from './Navlinks';

import Businesspage from '../pages/Businesspage';
import {Route,Routes} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


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
          <AnchorLink href='#about'><Nav.Link>About us</Nav.Link></AnchorLink>
          <AnchorLink href='#wastemanagement'><Nav.Link>Waste Management</Nav.Link></AnchorLink>
          <AnchorLink href='#Contact'><Nav.Link>Contact us</Nav.Link></AnchorLink>
            <Navlinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
       
    <Route path="/businesspage" element={<Businesspage/>} />
          
    </Routes>
    </>
    
  );
}

export default Topnavbar;