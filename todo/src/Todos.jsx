import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";

function Todos() {

    // const datosPrueba = [
    //     {
    //         "id": 1,
    //         "todo": "Do something nice for someone you care about",
    //         "completed": false,
    //         "userId": 152
    //     },
    //     {
    //         "id": 2,
    //         "todo": "Memorize a poem",
    //         "completed": true,
    //         "userId": 13
    //     }
    // ]
    const [listado, setListado] = useState([]);

    const [mostrarCompletadas, setMostrarCompletadas] = useState(false)

    const papelera =
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>

    const bolt =
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-bolt">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </svg>

    function cargarDatos() {
        fetch("https://dummyjson.com/todos")//URL DE LA API ESTO ES UN PROMISE
            .then(datos => datos.json())
            .then(respuesta => respuesta.todos)
            .then(tareas => setListado(tareas))

    }


    useEffect(() => {
        cargarDatos()

    }, []);



    function borraTarea(idTarea) {
        console.log("borrado" + idTarea);
        const nuevasTareas = listado.filter(e => e.id != idTarea)
        setListado(nuevasTareas)
    }
    function completaTarea(idTarea) {
        const nuevasTareas = listado.map(e => {
            if (e.id === idTarea) {
                e.completed = true;
            }
            return e;
        })
        setListado(nuevasTareas);
    }
    const filas = listado
        .filter(e => mostrarCompletadas || e.completed == false)
        .map(todo => {
            return (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.completed ?
                        <span style={{ color: "green" }}>Completada </span>
                        : <span style={{ color: "red" }}>Pendiente </span>}</td>
                    <td><div onClick={() => borraTarea(todo.id)}>{papelera}</div></td>
                    <td>{todo.completed
                        ? <></>
                        : <div onClick={() => completaTarea(todo.id)}>{bolt}</div>
                    }</td>

                </tr>
            )
        });

    // if (!listado) {
    //     <h1>cargando datos...</h1>
    // }
    return (
        <Container>
            <h1>todos</h1>
            <Form.Check // prettier-ignore
                type="switch"
                checked={mostrarCompletadas}
                onChange={(e) => setMostrarCompletadas(e.target.checked)}
                id="custom.switch"
                label="Mostrar completadas"
            />
            <br />

            <Button variant="danger" onClick={cargarDatos}>Cargar</Button>
            <br />
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarea</th>
                        <th>Completada</th>
                    </tr>
                </thead>
                <tbody>
                    {filas}
                </tbody>
            </Table>
        </Container>
    )



}
export default Todos;
