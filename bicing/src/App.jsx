import Bicing from "./bicing"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navegacion from "./Navegacion";
import { Col, Form, Row, Button, Container } from 'react-bootstrap';



function App() {

  const elpassword = "1234";

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [logeado, setLogeado] = useState(false);
  const [primeraVez, setPrimeraVez] = useState(true)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //handleEmailChange
  function cambiarEmail(evento) {
    let nuevoEmail = evento.target.value;
    setEmail(nuevoEmail);
  }

  //handlePasswordChange cualquiera de las dos funciona
  const cambiarPassword = (e) => setPassword(e.target.value);

  //esto es exctamente igual que el handleShow
  function mostrar() {
    setPrimeraVez(true)
    setShow(true)
  }

  function validar() {
    setPrimeraVez(false)
    if (password === elpassword) {
      setLogeado(true)
      setShow(false)
    }
    else {
      setLogeado(false);
    }
  }
  function logout() {
    setLogeado(false);
  }
  return (
    <>
      <Container>

        <Navegacion></Navegacion>

      </Container>

      <Container>

        <h1>APP</h1>
        <hr />
        {logeado ?
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
          :
          <Button variant="primary" onClick={mostrar}>
            Login
          </Button>
        }

      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control value={email} onChange={cambiarEmail} type="text" placeholder="Introducir email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control value={password} onChange={cambiarPassword} type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <h5>{(logeado || primeraVez) ? "" : "usuario no valido"}</h5>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={validar}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>



      <Bicing></Bicing>
    </>
  )
}

export default App

//componente input estará ligado a un state value y onchange y se refleje el cambio