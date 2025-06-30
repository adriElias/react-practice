import './App.css'
import { Container } from "react-bootstrap";
import { useState } from 'react';

import Navegacion from "./Navegacion";
import Registro from "./Registro";
import { Fecha } from './Fecha';
import { Periodo } from './Periodo';

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
        <Fecha></Fecha>
        <br />
        <br />
        <Periodo></Periodo>


      </Container>
    </>
  )
}

export default App
