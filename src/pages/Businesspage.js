import { Container,Row,Col } from "react-bootstrap";
import Productcards from "../components/Productcards";
import Topnavbar from "../components/Topnavbar";


function Businesspage() {
    const shops = [{"id":1,"title":"Shop1","image":"https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1","g1":"Scrapbooks and Papers-Rs.10/perKg","g2":"Ewaste-Rs.50/perKg","g3":"Domestic waste-Rs20/perKg","Address":"xyz1,Thane"},
    {"id":2,"title":"Shop2","image":"https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1","g1":"Newspapers-Rs.5/perKg","g2":"Vegetable waste-Rs.20/perKg","g3":"Plastic waste-Rs25/perKg","Address":"xyz2,Thane"},
    {"id":3,"title":"Shop3","image":"https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1","g1":"Scrapbooks and Papers-Rs.12/perKg","g2":"Bio medical waste-Rs.80/perKg","g3":"Metals-Rs20/perKg","Address":"xyz3,Thane"},
    {"id":4,"title":"Shop4","image":"https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1","g1":"Scrapbooks and Papers-Rs.10/perKg","g2":"Vegetable waste-Rs.15/perKg","g3":"Domestic waste-Rs22/perKg","Address":"xyz4,Thane"},
    {"id":5,"title":"Shop5","image":"https://th.bing.com/th/id/OIP.b73AddsUP5CHKJz11nkWJgHaFc?pid=ImgDet&rs=1","g1":"Bio medical waste-Rs.90/perKg","g2":"Ewaste-Rs.52/perKg","g3":"Metals-Rs18/perKg","Address":"xyz5,Thane"}]

    return (
        <>
        <Topnavbar />
        <Container fluid className="BP" >
           
                <h2 className="p-5">Welcome to the shops near you</h2>
                <Container className="BPUpperdiv">
          <Row>
            <Col xs>
                <img src="https://th.bing.com/th/id/OIP.p0iu9gCUIiPrmQkz9YvRhQHaE8?pid=ImgDet&rs=1"></img>
                <p>Domestic Waste</p>
            </Col>
            <Col xs={{ order: 12 }}>
                <img src="https://th.bing.com/th/id/OIP.5D-IGhRIpfT3NbsBPc9_XAHaE8?pid=ImgDet&rs=1"></img>
                <p>Biomedical Waste</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://th.bing.com/th/id/R.7f3fef0a87ea113a53040b5c7d8a43e4?rik=QTlAgNvoGImC4Q&riu=http%3a%2f%2fwww.vkbasket.com%2ftrash2cash-new%2fimages%2fscrap%2fdry-waste.jpg&ehk=4DCvVrZRtdrMAKLDbVrlImFam6MGcsJtdhKtK6duww8%3d&risl=&pid=ImgRaw&r=0"></img>
                <p>Dry Waste</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://th.bing.com/th/id/OIP.v3X7Kml_0NqAK2udBF1fQgHaEm?pid=ImgDet&rs=1"></img>
                <p>Metal Waste</p>
            </Col>
          </Row>
        </Container>
        <Container className="p-2">
                <Row> {
                      
                      shops.map((pro)=>
                            <Productcards img={pro.image} title={pro.title} Waste-1={pro.g1} Waste-2={pro.g2} Waste-3={pro.g3} rating={pro.rating.rate}/>
                        )
                        
                    }
                    </Row>
                </Container>
        </Container>
       
        </>
    )


}

export default Businesspage;