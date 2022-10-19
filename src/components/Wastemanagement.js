import '../css/Wastemanagement.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Wastemanagement(props) {
    return (
        <div className="wm" id='wastemanagement'>
            <div className='heading'>
                <h1><b>Waste Management</b></h1>

            </div>
            <div className='divisions'>
                <Row>
                    <Col md="10" className='d1'>
                        <h4><b>Waste segregation at home</b></h4>
                        <p>
                            You need to keep these following things in mind before segregating waste at home:<br></br>
                            {'>'} Keep 2 separate dustbins for dry and wet waste.<br></br>
                            {'>'} Remove any covering on the kitchen waste before throwing it in the dustbin.<br></br>
                            {'>'} Do not mix wet waste with dry waste.<br></br>
                            {'>'} Keep the plastic from the kitchen dry and separate in the dry bin.<br></br>
                            {'>'} Keep the dry waste rinsed of any food content before throwing in dry bin.<br></br>
                            {'>'} Throw the sanitary waste in a separate paper bag.
                        </p>
                    </Col>
                    <Col md="5" className='d2'>
                        <h4><b>Dry Waste</b></h4>

                        <p>
                            What is it?
                            Dry waste management is the setting up of the end to end process of
                            collection, sorting, aggregation and sale of dry waste. It starts with
                            the collection of source-segregated dry waste, sorting and grading of
                            the various categories in secondary sorting collection centers,
                            aggregating for sale of recyclables into the open market, or aggregating
                            for take/buy back of non-recyclables by Producer Organizations of their
                            branded litter.
                            This should cater to all types of dry waste be it Paper, Plastic both
                            recyclable and non-recyclable, metals, glass, bulky dry waste like thermocole,
                            mattress, furniture, cloth
                        </p>
                    </Col>
                    <Col md="5" className='d2'>
                        <img src={props.wm1}></img>
                    </Col>
                    <Col md="5" className='d2'>
                        <img src={props.wm2}></img>
                    </Col>
                    <Col md="5" className='d2'>
                        <h4><b>Wet Waste</b></h4>
                        <img src={props.TP}></img>
                        <p>Wet waste or organic waste such as Vegetable peels, food leftovers,
                            etc., constitute about 50% of the overall waste stream. Dumping of
                            Organic wastes at landfills leads to formation of noxious fumes that
                            adds to green- house gases and also pollutes land, water bodies.
                            This can be avoided by properly managing wet waste through processes that 
                            are environmentally friendly such as composting or by feeding the Pre-Conditioned wet-waste to Bio-gas plants.
                        </p>
                    </Col>

                </Row>
            </div>

        </div>
    );
}

export default Wastemanagement;