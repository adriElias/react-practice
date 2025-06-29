import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Login from './Login';
import Registro from './Registro';
import { NavegacionProps } from './types';

function Navegacion(props: NavegacionProps) {


    function logout() {
        props.setNombreUsuario("")
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">MiAPP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.nombreUsuario &&
                            <>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
                {props.nombreUsuario ?
                    <>
                        <span className="me-4">Hola {props.nombreUsuario}! </span>
                        <Button variant="danger" onClick={logout} size="sm">
                            Salir
                        </Button>
                    </>
                    :
                    <>
                        <Login setNombreUsuario={props.setNombreUsuario} />
                        <Registro></Registro>
                    </>
                    
                }

            </Container>

        </Navbar>
    );
}

export default Navegacion;