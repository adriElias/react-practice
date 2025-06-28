import Form from 'react-bootstrap/Form';

function Fotos() {
    return (
        <Form.Select aria-label="Default select example">
            <option>Fotos</option>
            <option value="1">Coche</option>
            <option value="2">Moto</option>
            <option value="3">Bici</option>
        </Form.Select>
    )
}

export default Fotos;