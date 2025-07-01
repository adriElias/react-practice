import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Col, Row } from 'react-bootstrap';
import type { LoginProps } from './types';

const passwordCorrecto = "1234"

function Login(props: LoginProps) {

    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [mensajeError, setMensajeError] = useState("")
    const ocultarModal = () => setShow(false);

    const mostrarModal = () => {
        setMensajeError("")
        setShow(true);
    }

    const cambiarNombre = (e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)
    const cambiarPassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    function validar() {

        if (password == passwordCorrecto && nombre.length > 2) {
            props.setNombreUsuario(nombre)
            //setShow(false)
        } else {
            setMensajeError("Usuario o password no válidos")
        }

    }

    return (

        <>
            <Button variant='success' onClick={mostrarModal}>Login</Button>

            <Modal show={show} onHide={ocultarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Nombre
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={cambiarNombre} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={cambiarPassword} type="password" />
                            </Col>
                        </Form.Group>
                    </Form>
                    <p className="text-danger">{mensajeError}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ocultarModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={validar}>
                        Validate
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default Login;