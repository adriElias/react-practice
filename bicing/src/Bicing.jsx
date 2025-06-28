import { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
function Bicing() {

    const [estaciones, setEstaciones] = useState([]);//inicializar con que tipo de dato y no tener problema

    const [filterByEbikes, setFilterByEbikes] = useState(false);

    const [filterByMin, setFilterByMin] = useState(20);

    const [filterByText, setFilterByText] = useState("");

    const url = "https://api.citybik.es/v2/networks/bicing" ;

    function cargarDatos() {
        fetch(url)//URL DE LA API,  ESTO ES UN PROMISE
            .then(datos => datos.json())
            .then(respuesta => respuesta.network.stations)
            .then(stations => {
                console.log("datos recibidos", stations)//encapsular siempre en un them 
                setEstaciones(stations)
            })
            .catch(e => console.log(e))

    }
    //cuando cambie las estaciones, vuelve a ejecutar, //cuidado con esto, solo es para el state 
    useEffect(()=>{
        console.log("Estaciones: ", estaciones )

    }, [estaciones]);

    //debemos identificar el componente principal mediante una key, porque sino react se puede confundir 
    // tr key --> obligatorio en cada componente visual
    function convertToRow(station) {
        return (
            <tr key={station.id}>
                <td>{station.name}</td>
                <td>( {station.latitude} , {station.longitude})</td>
                <td>{station.extra.normal_bikes}</td>
                <td>{station.extra.ebikes}</td>
                <td>{station.empty_slots}</td>
            </tr>
        )

    }

    //arrow que no recibe nada
    useEffect(() => {
        cargarDatos()
    }, [])

    const handleFilterToggle = () => setFilterByEbikes(!filterByEbikes);

    const handleSliderChange = (e) => {
        setFilterByMin(e.target.value);
    };

    
    const handleTextFilterInput = (e) => {
        setFilterByText(e.target.value);
    }

    console.log(filterByText);
    
    let filas = estaciones
        .filter(station => station.extra.ebikes > 0)
        .filter(station => (station.extra.normal_bikes + station.extra.ebikes) >= filterByMin)
        .filter(station => station.name.toUpperCase().indexOf(filterByText.toUpperCase()) !== -1)
        .map(station => convertToRow(station));
        
        // useEffect(()=>{
        //     estaciones = estaciones.map(estaciones =>{
        //         return <tr> 
        //             <td>{estaciones.name}</td>
        //              <td>{estaciones.free_bikes}</td>
        //               <td>{estaciones.empty_slots}</td>
        //         </tr>

        //     })
        // }, [estaciones])

    return (
        <Container>
            <h1>Bicing BCN</h1>
            <div>
                <div>
                    <Form.Label>Filtrar por nombre</Form.Label>
                    <Form.Control type="text" placeholder="filtrar por nombre" 
                    onChange={handleTextFilterInput}/>

                </div>
                <div>
                    <Form.Check
                        type="switch"
                        id="customSwitch"
                        label="Mostrar únicamente E-Bikes"
                        onClick={handleFilterToggle}
                    />
                    <Form.Label>Min bicis libres: {filterByMin}</Form.Label>
                    <Form.Range
                        value={filterByMin}
                        className="customSlider"
                        onChange={handleSliderChange} />
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Coordenadas</th>
                        <th>Bikes</th>
                        <th>E-Bikes</th>
                        <th>Slots</th>

                    </tr>
                </thead>
                <tbody>
                    {filas}
                </tbody>
            </Table>
        </Container>
    )

}
export default Bicing;