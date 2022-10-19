import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Orderhere.css';

function Orderhere() {
    return (
        <Form id="Orderhere">
            <h3>ORDER HERE</h3>
            <Form.Group className="mb-3 p-2" controlId="formBasicName">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" placeholder="UserName" />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="textarea" placeholder="Building name,Room no,Streat,Near by,City,Pincode" />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <div class="mb-3 p-2">
                <Form.Label>Shop No.</Form.Label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select Shop No.</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                    <option value="9">Nine</option>

                </select>
            </div>

            <Form.Group className="mb-3 p-2" controlId="formBasicDetails">
                <Form.Label>Garbage Details</Form.Label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select Garbage Type.</option>
                    <option value="1">Scrapbooks and Papers</option>
                    <option value="2">Ewaste</option>
                    <option value="3">Domestic waste</option>
                    <option value="4">Newspapers</option>
                    <option value="5">Vegetable waste</option>
                    <option value="6">Bio medical waste</option>
                    <option value="7">Plastic waste</option>
                    <option value="8">Metals</option>
                </select>
            </Form.Group>

            <div className='p-3'>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );

}

export default Orderhere;