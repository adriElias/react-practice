import { useState } from "react";
import { Container } from "react-bootstrap";

function Tricolor() {
    const colores = ["grey", "red", "green", "blue"];
    const [colorIndex, setColorIndex] = useState(0);


    const estilo = {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: colores[colorIndex],
        margin: "5px",
        cursor: "pointer"
    };

    const handleClick = () => {
        let nuevoEstado = colorIndex + 1;
        if (nuevoEstado === 4) {
            nuevoEstado = 0;
        }
        setColorIndex(nuevoEstado);
    };

    return (
        <Container>
            <div>
                <h1>Tricolor</h1>
                <div style={estilo} onClick={handleClick}></div>
            </div>
        </Container>
    );
}

export default Tricolor;