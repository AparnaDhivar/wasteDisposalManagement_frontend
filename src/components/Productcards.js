import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Orderhere from './Orderhere'
import Button from 'react-bootstrap/Button';

function Productcards(props) {
  return (
    <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.add}
         <br></br>
         Contact No.- +91 88589*****
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.g1}</ListGroup.Item>
        <ListGroup.Item>{props.g2}</ListGroup.Item>
        <ListGroup.Item>{props.g3}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" onClick={props.onclick}>
        Order Here
      </Button>
        
      </Card.Body>
    </Card>
  );
}

export default Productcards;