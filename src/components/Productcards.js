import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcards(props) {
  return (
    
    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} className="product-image"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.Waste-1}
        <br></br>
        {props.Waste-2}
        <br></br>
        {props.Waste-3}
       </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </Col>

  );
}

export default Productcards;