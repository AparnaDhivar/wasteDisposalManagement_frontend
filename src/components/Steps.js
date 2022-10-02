import '../css/Steps.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Steps() {
    return (
        <div className="steps">
            <div className='heading'>
                <h1><b>Three Steps To Better Waste Service</b></h1>
            </div>
            <div className='divisions'>
                <Row>
                    <Col md="3" className='d1'>
                        <h4><b>Step-1</b></h4>
                        <p>Go to business page & select the shop which locates near you.
                        </p>
                    </Col>
                    <Col md="3" className='d1'>
                        <h4><b>Step-2</b></h4>
                        <p>Go through the items details and select the waste you want to give.
                        </p>
                    </Col>
                    <Col md="3" className='d1'>
                        <h4><b>Step-3</b></h4>
                        <p>Fill your personal details,write amount of garbage and place the order.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Steps;