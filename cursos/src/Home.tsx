import { Navigation } from "./Navigation"
import { Container } from "react-bootstrap";
import { useState } from 'react';


export const Home = () => {
    const [nombreUsuario, setNombreUsuario] = useState("");

    return (
        <>

            <Navigation nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} />


            <Container>
                <br />
                <br />
                <br />
                <h1> Bienvenido {nombreUsuario ? nombreUsuario : " sin usuario, Registrate"}</h1>
                <br />
                <br />


            </Container>
        </>

    )


}