import Pagination from 'react-bootstrap/Pagination';

function Paginacion() {
    // const [valor, setValor] = useState(0);
    // const mas = () => setValor(valor < 10 ? valor + 1: 10);
    // const menos = () => setValor(valor > 10 ? valor - 1: 0)

    // let items = [];
    // for (let number = 1; number <= 10; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }

    // const paginationBasic = (
    //     <div>
    //         <Pagination>{items}</Pagination>
    //         <br />

    //         <Pagination size="lg">{items}</Pagination>
    //         <br />

    //         <Pagination size="sm">{items}</Pagination>
    //     </div>
    // );

    // render(paginationBasic);
    // map(else, idx) => <tr key={idx}><td><Badge></Badge></td></tr> REACT PIDE UNA CLAVE UNICA PARA CADA ELEMENTO, de datos que no van a cambiar , las key tiene que estar en la parte mñas exterior
    return (
        <>
            <h1>Hola estas en la paginación</h1>
            <Pagination>
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Last />
            </Pagination>
        </>

    )
}
export default Paginacion;