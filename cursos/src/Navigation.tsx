import { Button, Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import type { NavigationProps } from './types';
import Login from "./Login";
import { Link } from "react-router-dom";

export const Navigation = (props: NavigationProps) => {

    function logout() {
        props.setNombreUsuario("")
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand">Cursos</Link>
                    <Nav className="me-auto">
                        {props.nombreUsuario &&

                            <>
                                <Link to="/home" className="nav-link">Home</Link>
                                <Link to="/cursos" className="nav-link">Cursos</Link>
                                <Link to="/admin" className="nav-link">Admin</Link>
                            </>
                        }

                    </Nav>
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
                            
                        </>

                    }
                </Container>
            </Navbar>
        </>

    )
}


