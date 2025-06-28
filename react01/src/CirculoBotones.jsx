import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function CirculoBotones() {

    const [color, setColor] = useState('grey')


    const estilo = {
        width: "50px",
        height: "50px",
        backgroundColor: color,
        borderRadius: "50%",
        display: "inline-block",
        margin: "5px"
    }

   function colorActual(){
        console.log(color);
    }

    // function colorActual(e){
    //    console.log(e)
    //    const newColor = e.color
    //    colorActual(newHeight)
    // }

    

    return (
        <Container>
            <div style={estilo} onClick={() => setColor(color === "red" ? "grey" : "red")}></div>
            <div style={estilo} onClick={() => setColor(color === "red" ? "grey" : "red")}></div>
            <div style={estilo} onClick={() => setColor(color === "red" ? "grey" : "red")}></div>
            <div style={estilo} onClick={() => setColor(color === "red" ? "grey" : "red")}></div>
            <div style={estilo} onClick={() => setColor(color === "red" ? "grey" : "red")}></div>

            <div className="d-flex gap-2 mb-2">
                
                <Button variant="danger">Poner rojo</Button>

                <Button variant="secondary">Quitar rojo</Button>
                
            </div>
        </Container>
    )
}
export default CirculoBotones;