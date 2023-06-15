import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Orderhere.css';
import axios from "axios";
import { useState } from 'react';


function Orderhere() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneno, setPhone] = useState("");
    const [shopno, setShop] = useState("One");
    const [garbage, setGarbage] = useState("Scrapbooks and Papers");
	
	const handleSubmit= () => {
		var data = {
            "username": username,
            "phoneno": phoneno,
            "address": address,
            "email": email,
            "shopno": shopno,
            "garbage": garbage
          };
          
        
          axios.post('http://127.0.0.1:8080/api/contact',data)
          .then(response =>  alert(JSON.stringify(response.data)))
          .catch(error => alert(error));

		
	  }

    return (
        <form id="Orderhere">

            <label>Enter your name:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                />
            </label><br></br>

            <label>Enter your Email address:
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label><br></br>

            <label>Enter your Residental Address:
                <input
                    type="textarea"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label><br></br>

            <label>Enter your Phone No.:
                <input
                    type="text"
                    value={phoneno}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label><br></br>

            <label>Enter your Shop No.:
                <select class="form-select" aria-label="Default select example" value={shopno}
                    onChange={(e) => setShop(e.target.value)} required>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                    <option value="Four">Four</option>
                    <option value="Five">Five</option>
                    <option value="Six">Six</option>
                    <option value="Seven">Seven</option>
                    <option value="Eight">Eight</option>
                    <option value="Nine">Nine</option>
                </select>
            </label><br></br>

            <label>Enter your Garbage Details:
                <select class="form-select" aria-label="Default select example" value={garbage}
                    onChange={(e) => setGarbage(e.target.value)} required>
                    <option value="Scrapbooks and Papers">Scrapbooks and Papers</option>
                    <option value="Ewaste">Ewaste</option>
                    <option value="Domestic waste">Domestic waste</option>
                    <option value="Newspapers">Newspapers</option>
                    <option value="Vegetable waste">Vegetable waste</option>
                    <option value="Bio medical waste">Bio medical waste</option>
                    <option value="Plastic waste">Plastic waste</option>
                    <option value="Metals">Metals</option>
                </select>
            </label><br></br>

           
                <Button variant="success" type="button" value="submit"  onClick={()=>handleSubmit()} >
                     Submit
                </Button>
             

        </form>
    )
}

export default Orderhere;