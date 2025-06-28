import { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Miniatura() {
    const [icono, setIcono] = useState("like");

    const estilo = {
        background: "none",
        border: "none",
        cursor: "pointer",
    };

    const handleClick = () => {
        setIcono(icono === "like" ? "unlike" : "like");
    };

    return (
        <Container>
            <h1>Esto es una miniatura</h1>
            <div>
                <h1>¡Hola React!</h1>
                <button style={estilo} onClick={handleClick}>
                    <FontAwesomeIcon icon={icono === "like" ? faThumbsUp : faThumbsDown} size="2x" />
                </button>
            </div>
        </Container>
    );
}

export default Miniatura;
