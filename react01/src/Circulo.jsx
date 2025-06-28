import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Circulo() {
    const [colores, setColores] = useState(Array(5).fill('grey'));

    const estilo = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "5px"
    };

    const handleClick = (index) => {
        setColores(colores =>
            colores.map((color, i) =>
                i === index ? (color === "orange" ? "grey" : "orange") : color
            )
        );
    };

    return (
        <Container>
            {colores.map((color, i) => (
                <div
                    key={i}
                    style={{ ...estilo, backgroundColor: color }}
                    onClick={() => handleClick(i)}
                ></div>
            ))}
        </Container>
    );
}

export default Circulo;
