import { useState } from "react";
import { Col, Container, Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


const gato1 = "/image/gato1.jpeg"
const gato2 = "/image/gato1.jpeg"
function Gatos() {
    const estilo = {
        width: '50px',
        height: '50px',
        backgroundColor: 'none',
        display: 'inline-block',
        margin: '5px'
    }

    // let gato = gato1;
    const [gato, setGato] = useState(gato1);

    function muestraGato1() {
        // gato = gato1;
        let nuevoGato = gato1;
        setGato = nuevoGato;

        console.log(nuevoGato);
    }
    function muestraGato2() {
        let nuevoGato = gato2;

        setGato = nuevoGato;
        console.log(nuevoGato);
    }
    return (
        <Container>

            <h1>Elige una foto</h1>
            {/* <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">gato</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Moto</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Coche</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}

            <Row>
                <Col>
                    <div >
                        <img src={gato} alt="" />
                        {/* <button onClick={muestraGato1}></button>
                 <button onClick={muestraGato2}></button> */}
                    </div>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example" value={gato} onInput={(e) => setGato(e.target.value)}>
                        <option>Open this select menu</option>
                        <option value={gato1}>Gato 1 </option>
                        <option value={gato2}>Gato 2</option>
                        <option value={gato3}>Gato 3</option>
                    </Form.Select>
                </Col>
            </Row>


        </Container>
    )

}
export default Gatos;