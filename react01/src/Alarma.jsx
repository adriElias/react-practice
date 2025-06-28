import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

function Pantalla(props) {

    return (
        <>
            <Row>
                <Col>
                    <div  onClick={props.ponerCero} className="patalla">{props.valor}</div>
                </Col>
            </Row>
        </>)

}

function Tecla(props) {

    return <Button onClick={() => props.pulsarTecla(props.pulsar)} variant="outline-primary">{props.pulsar}</Button>
}

function Teclado(props) {
    <>
        <Row>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="1"></Tecla></Col>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="2"></Tecla></Col>
            <Col><Tecla pulsarTecla={props.pulsarTecla} ulsar="3"></Tecla></Col>

        </Row>
        <Row>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar={4}></Tecla></Col>//para la calculadora
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="5"></Tecla></Col>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="6"></Tecla></Col>

        </Row>
        <Row>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="7"></Tecla></Col>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="8"></Tecla></Col>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="9"></Tecla></Col>

        </Row>
        <Row>
            <Col><Tecla pulsarTecla={props.pulsarTecla} pulsar="0"></Tecla></Col>
        </Row>
    </>
}
function Alarma() {

    const [valor, setValor] = useState("")

    function pulsarTecla(x) {
        setValor = (valor + x);
    }
    function ponerCero(){
        setValor("")

    }
    return (
        <>
        {/* valor */}
            <Pantalla valor={valor} ponerCero={ponerCero}> </Pantalla>
            <Teclado pulsarTecla={pulsarTecla}></Teclado>
            {/* <button onClick={()=>pulsarTecla()}>prueba</button> */}
        </>
    )
}
export default Alarma;