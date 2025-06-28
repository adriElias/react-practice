import './App.css'
import { Container } from "react-bootstrap";
import { useState } from 'react';

import Navegacion from "./Navegacion";
// import Registro from "./Registro";

function App() {

  const [usuario, setUsuario] = useState(false)

  return (
    <>
      <Container>
        <Navegacion usuario={usuario} setUsuario={setUsuario} />
      </Container>

      <Container>
        <br />
        <br />
        <br />
        <h1> App{usuario ? usuario : "sin usuario"}</h1>
        <br />
        <br />
        {/* <Registro /> */}


      </Container>
    </>
  )
}

export default App
