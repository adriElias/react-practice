import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Login from './Login';

function Navegacion(props) {


    function logout() {
        props.setUsuario("")
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">MiAPP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.usuario &&
                            <>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
                {props.usuario ?
                    <>
                        <span className="me-4">Hola {props.usuario}! </span>
                        <Button variant="danger" onClick={logout} size="sm">
                            Salir
                        </Button>
                    </>
                    :
                    <Login setUsuario={props.setUsuario} />
                }

            </Container>

        </Navbar>
    );
}

export default Navegacion;