
import { Container,Row,Col } from "react-bootstrap";
import Productcards from "../components/Productcards";
import Topnavbar from "../components/Topnavbar";
import Orderhere from "../components/Orderhere";
import logo from '../images/logo.png';
import '../css/Businesspage.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
function Businesspage() {
    const shops = [{ "id": 1, "title": "Shop1", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Scrapbooks and Papers-Rs.10/perKg", "g2": "Ewaste-Rs.50/perKg", "g3": "Domestic waste-Rs20/perKg", "Address": "xyz1,Thane" },
    { "id": 2, "title": "Shop2", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Newspapers-Rs.5/perKg", "g2": "Vegetable waste-Rs.20/perKg", "g3": "Plastic waste-Rs25/perKg", "Address": "xyz2,Thane" },
    { "id": 3, "title": "Shop3", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Scrapbooks and Papers-Rs.12/perKg", "g2": "Bio medical waste-Rs.80/perKg", "g3": "Metals-Rs20/perKg", "Address": "xyz3,Thane" },
    { "id": 4, "title": "Shop4", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Scrapbooks and Papers-Rs.10/perKg", "g2": "Vegetable waste-Rs.15/perKg", "g3": "Domestic waste-Rs22/perKg", "Address": "xyz4,Thane" },
    { "id": 5, "title": "Shop5", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Bio medical waste-Rs.90/perKg", "g2": "Ewaste-Rs.52/perKg", "g3": "Metals-Rs18/perKg", "Address": "xyz5,Thane" },
    { "id": 1, "title": "Shop6", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Scrapbooks and Papers-Rs.10/perKg", "g2": "Ewaste-Rs.50/perKg", "g3": "Domestic waste-Rs20/perKg", "Address": "xyz1,Thane" },
    { "id": 2, "title": "Shop7", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Newspapers-Rs.5/perKg", "g2": "Vegetable waste-Rs.20/perKg", "g3": "Plastic waste-Rs25/perKg", "Address": "xyz2,Thane" },
    { "id": 3, "title": "Shop8", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Scrapbooks and Papers-Rs.12/perKg", "g2": "Bio medical waste-Rs.80/perKg", "g3": "Metals-Rs20/perKg", "Address": "xyz3,Thane" },
    { "id": 4, "title": "Shop9", "image": "https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1", "g1": "Scrapbooks and Papers-Rs.10/perKg", "g2": "Vegetable waste-Rs.15/perKg", "g3": "Domestic waste-Rs22/perKg", "Address": "xyz4,Thane" }
   ]
   const [modalShow, setModalShow] = useState(false);

    return (
        <> 
        <Topnavbar className="p-5" Logo={logo}/>
       
        <div id="Businesspage" className="p-5">
            <Topnavbar Logo={logo} />
            <Container className="p-2">
                <Row className="p-3"> {
                      
                        shops.map((pro)=>
                            <Productcards className="BPcards" img={pro.image} title={pro.title} g1={pro.g1} g2={pro.g2} g3={pro.g3} add={pro.Address} onclick={() => setModalShow(true)}/>
                        )
                        
                    }
                    </Row>
                </Container>
            {/* <Orderhere /> */}
            </div>   

            <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Orderhere/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>

   

      
        </>
    );


}

export default Businesspage;