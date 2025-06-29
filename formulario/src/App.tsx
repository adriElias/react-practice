import './App.css'
import { Container } from "react-bootstrap";
import { useState } from 'react';

import Navegacion from "./Navegacion";
import Registro from "./Registro";

function App() {

  const [nombreUsuario, setNombreUsuario] = useState("")

  return (
    <>
      <Container>
        <Navegacion nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} />
      </Container>

      <Container>
        <br />
        <br />
        <br />
        <h1> App{nombreUsuario ? nombreUsuario : " sin usuario, Registrate"}</h1>
        <br />
        <br />
        <Registro />


      </Container>
    </>
  )
}

export default App
