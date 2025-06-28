function Taula(props) {
    const estilo = {
        border: "1px solid blue"
    }
    const filas = props.nombres.map(nombre => {
        return (
            <tr>
                <td style={estilo}>
                    {nombre}
                </td>
            </tr>)
    })
    return (
        <table style={estilo}>
            <thead>
                <tr>
                    <th style={estilo}>
                        {props.titulo}
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td style={estilo}>Lluís</td>
                </tr>
                <tr>
                    <td style={estilo}>Mercè</td>
                </tr>
                <tr>
                    <td style={estilo}>Ester</td>
                </tr> */}
                {filas}
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}
export default Taula;