import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundo from './HolaMundo'
import Bola from './Bola'
import Cuadrado from './Cuadrado'
import Separador from './Separador'
import Titulo from './Titulo'
import Taula from './Taula'
import BolaX from './BolaX'
// import { Navegacion } from './Navegacion'
// import Lateral from './Lateral'
// import Contenido from './Contenido'
import MasMenos from './MasMenos'
import Paginacion from './Paginacion'
import Circulo from './Circulo'
import CirculoBotones from './CirculoBotones'
import Miniatura from './Miniatura'
import Tricolor from './tricolor'
import Fotos from './Fotos'
import Calculadora from './Calculadora'
import CuadradoB from './CuadradoB'
import Mosca from './Mosca'
import Capital from './assets/Capital'
import Todos from './Todos'

// import comarcas from './comarcas.json'
// import Tabla from './Tabla'
function App() {
  // const [count, setCount] = useState(0)
  // console.log(comarcas);

  // let idioma = "es";
  // const [idioma, setIdioma] = useState("ca")
  // function idiomaEs(){
  //   console.log("idioma actual: ", idioma)
  //   setIdioma = "es"
  //   console.log("idioma actual: ", idioma)
  // }
  return (
    <>
      <HolaMundo></HolaMundo>
      <Bola></Bola>
      <Cuadrado></Cuadrado>
      <Separador></Separador>
      <Titulo texto="Hola React!"></Titulo>
      <BolaX talla="80px" margen="10px" fondo="#ff0000" ></BolaX>
      <CuadradoB talla="70px" margen="8px" grosor="5px" color="red"></CuadradoB>
      <Mosca color="blue"></Mosca>
      <Capital nom="barcelona"></Capital> 
      <MasMenos></MasMenos>
      <Paginacion></Paginacion>
      <Circulo></Circulo>
      <CirculoBotones></CirculoBotones>
      <Miniatura></Miniatura>
      <Tricolor></Tricolor>
      {/* <Fotos></Fotos> */}
      <Todos></Todos>
      {/* <Calculadora></Calculadora> */}
      {/* <Navegacion titulo="Navegación"></Navegacion>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Lateral setIdioma={setIdioma} lista = {lista}></Lateral>
      <Contenido></Contenido> */}


  


      {/*
      <Taula titulo="Personas" nombres={["Toni", "Pere", "Anna", "Ramón", "Denisse"]}></Taula>
      <Taula titulo="Motos" nombres={["Toni", "Pere", "Anna", "Ramón", "Denisse"]}></Taula> */}
      {/* <Tabla datos={comarcas}></Tabla> */}
    </>
  )
}

export default App
