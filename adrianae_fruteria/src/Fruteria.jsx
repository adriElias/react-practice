import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

function Fruteria() {

    const productes = [
        {
            "id": 1,
            "nom": "Plàtan",
            "preu": 0.5
        },
        {
            "id": 2,
            "nom": "Poma",
            "preu": 0.8
        },
        {
            "id": 3,
            "nom": "Pinya",
            "preu": 5
        },
        {
            "id": 4,
            "nom": "Meló",
            "preu": 6
        },
    ];


    const [carrito, setCarrito] = useState([]);

    const total = carrito.reduce((acc, producte) =>
        acc + producte.preu * producte.cantidad, 0
    );


    const afegir = (producte) => {
        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(item => item.id === producte.id);
            if (existe) {
                return prevCarrito.map(item =>
                    item.id === producte.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producte, cantidad: 1 }];
            }
        });
    }

    console.log("El total es : ", total)

    const filas = productes
        .map(producte => {
            return (
                <Card key={producte.id} className="mb-3" border="primary">
                    <Card.Body>
                        <Card.Title>{producte.nom}</Card.Title>
                        <Card.Text>Preu: {producte.preu} €</Card.Text>
                        <Button onClick={() => afegir(producte)} variant="primary">Afegir</Button>
                    </Card.Body>
                </Card>
            )
        });

    const treura = (producte) => {
        setCarrito(prevCarrito => prevCarrito
            .filter(item => item.id !== producte.id));
    }

    const carritoFilas = carrito.length === 0
        ? <div>El carrito está vacío</div>
        : carrito.map(item => (
            <Card key={item.id} className="mb-2" border="light" bg="light" text="dark">
                <Card.Body className="py-2 px-3">
                    <Card.Title className="mb-1" >{item.nom}</Card.Title>
                    <Card.Text className="mb-0">
                        {item.cantidad} x € {item.preu} =
                        <strong>
                            € {(item.preu * item.cantidad).toFixed(2)}
                        </strong>
                    </Card.Text>
                    <Button onClick={() => treura(item)} variant="primary">Treura</Button>
                </Card.Body>
            </Card>

            // <div key={item.id}>
            //     {item.nom} x {item.cantidad} = € {(item.preu * item.cantidad).toFixed(2)}
            // </div>
        ));

    return (
        <Container className="d-flex flex-column align-productes-center mt-3">
            <Card className="p-3" border="primary" bg="primary" text="white">
                <h1 className="text-center">FRUTERIA</h1>
                <Row className="mt-3">
                    <Col>
                        {filas}
                    </Col>
                    <Col>
                        <Card border="success" bg="success" text="white">
                            <Card.Body>
                                <h4>Ticket</h4>
                                {carritoFilas}
                            </Card.Body>
                        </Card>
                        <Card border="danger" bg="danger" text="white" className="mt-3">
                            <Card.Body>
                                <h1>TOTAL: </h1>
                                <h3>€ {total}</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Container>
    )

}
export default Fruteria;

