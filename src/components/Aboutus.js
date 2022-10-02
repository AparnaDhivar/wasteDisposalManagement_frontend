import '../css/Aboutus.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutus(props) {
    return (
        <div className="about">
            <div className='heading'>
                <h1><b>About Us</b></h1>
                <h3>Start Trash & Recycling Pickup With Us Today</h3>
            </div>
            <div className='divisions'>
                <Row>
                    <Col md="3" className='d1'>
                        <h4><b>My ODWD</b></h4>
                        <img src={props.ODWD}></img>
                        <p>Use my ODWD,manage your waste from the place where you are.
                            Get easy waste disposal tips and some information about disposal.
                        </p>
                    </Col>
                    <Col md="3" className='d1'>
                        <h4><b>Drive Safety</b></h4>
                        <img src={props.DS}></img>
                        <p>Each ODWD driver undergoes a rigorous, months-long program with classes 
                            and fieldwork to ensure they'll handle your waste and recycling properly.
                        </p>
                    </Col>
                    <Col md="3" className='d1'>
                        <h4><b>Time Punchuality</b></h4>
                        <img src={props.TP}></img>
                        <p>ODWD offers you the fast service as well we are punchual with our given
                            time.ODWD drivers reaches the destination of the customer on time.
                        </p>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default Aboutus;