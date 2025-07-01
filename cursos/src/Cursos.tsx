import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';


export const Cursos = () => {

    const cursos = [
        { id: 1, titulo: "React Básico", categoria: "frontend", nivel: "basico", descripcion: "React desde cero con hooks" },
        { id: 2, titulo: "Node Intermedio", categoria: "backend", nivel: "intermedio", descripcion: "API REST con Express y middleware" },
        { id: 3, titulo: "CSS Grid", categoria: "frontend", nivel: "basico", descripcion: "Diseños con CSS Grid y Flexbox" },
        { id: 4, titulo: "MongoDB Avanzado", categoria: "backend", nivel: "avanzado", descripcion: "Indexación, agregaciones y rendimiento" },
        { id: 5, titulo: "TypeScript Intermedio", categoria: "frontend", nivel: "intermedio", descripcion: "Tipos avanzados y genéricos" },
        { id: 6, titulo: "Docker Básico", categoria: "devops", nivel: "basico", descripcion: "Contenedores y volúmenes en Docker" },
        { id: 7, titulo: "Git y GitHub", categoria: "herramientas", nivel: "basico", descripcion: "Flujos de trabajo y ramas" },
        { id: 8, titulo: "React Router", categoria: "frontend", nivel: "intermedio", descripcion: "Navegación en SPAs con rutas" },
        { id: 9, titulo: "SQL Avanzado", categoria: "backend", nivel: "avanzado", descripcion: "Subconsultas, joins y normalización" },
        { id: 10, titulo: "Figma para Devs", categoria: "herramientas", nivel: "basico", descripcion: "Uso de prototipos e interfaces" },
        { id: 11, titulo: "Node Básico", categoria: "backend", nivel: "basico", descripcion: "Servidor y módulos en Node.js" },
        { id: 12, titulo: "Tailwind CSS", categoria: "frontend", nivel: "intermedio", descripcion: "Estilos con utilidades CSS" },
        { id: 13, titulo: "CI/CD con GitHub Actions", categoria: "devops", nivel: "avanzado", descripcion: "Deploy automatizado y testing" },
        { id: 14, titulo: "HTML Semántico", categoria: "frontend", nivel: "basico", descripcion: "Estructura accesible y correcta" },
        { id: 15, titulo: "Express Avanzado", categoria: "backend", nivel: "avanzado", descripcion: "Middlewares personalizados y rutas protegidas" },
        { id: 16, titulo: "TypeScript Básico", categoria: "frontend", nivel: "basico", descripcion: "Tipos primitivos y funciones tipadas" },
        { id: 17, titulo: "Linux para DevOps", categoria: "devops", nivel: "intermedio", descripcion: "Comandos, scripts y permisos" },
        { id: 18, titulo: "Vite + React", categoria: "herramientas", nivel: "intermedio", descripcion: "Proyectos modernos con Vite" },
        { id: 19, titulo: "MongoDB Básico", categoria: "backend", nivel: "basico", descripcion: "Colecciones, documentos y queries" },
        { id: 20, titulo: "Control de versiones avanzado", categoria: "herramientas", nivel: "avanzado", descripcion: "Rebase, cherry-pick y flujos colaborativos" },
    ];



    const cards = cursos.map(curso => (
        <Col key={curso.id} lg={3} className="d-flex justify-content-center">
            <Card
                className="mb-4 shadow-sm border-0"
                style={{
                    width: '100%',
                    background: '#f8f9fa',
                    borderRadius: '1rem',
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Card.Body>
                    <Card.Title style={{ fontWeight: 700, color: '#222' }}>{curso.titulo}</Card.Title>
                    <Card.Text style={{ color: '#555', fontSize: '0.97rem' }}>
                        {curso.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" style={{ border: 'none', background: 'transparent' }}>
                    <ListGroup.Item style={{ background: 'transparent', border: 'none', color: '#6c757d', fontSize: '0.93rem' }}>
                        <strong>Categoría:</strong> {curso.categoria}
                    </ListGroup.Item>
                    <ListGroup.Item style={{ background: 'transparent', border: 'none', color: '#6c757d', fontSize: '0.93rem' }}>
                        <strong>Nivel:</strong> {curso.nivel}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    ));


return (
    <>
        <Container className="d-flex flex-column align-cursoss-center mt-3">


            <Form>
                <Form.Group controlId="select-categoria">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select
                        style={{
                            background: "#f4f4f4",
                            border: "1px solid #e0e0e0",
                            borderRadius: "0.5rem",
                            color: "#444",
                            boxShadow: "none"
                        }}>
                        <option value="">Todas</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="devops">DevOps</option>
                        <option value="herramientas">Herramientas</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            <Form.Label className='mt-4'>Nivel</Form.Label>
            <Form.Range />
            <Card border='white'>
                <Row className="justify-content-center g-3 mt-4 mb-4">
                    {cards}
                </Row>
            </Card>


        </Container>
    </>
)
}