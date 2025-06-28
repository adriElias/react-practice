function Tabla(props) {
    // ilas = props.datos..filter(e=> e.poblacio)map(item => {}
    const filas = props.datos.map(item => {
        return (
            <tr>
                <td>{item.comarca}</td>
                <td>{item.capital}</td>
            </tr>
        )

    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Comarca</th>
                    <th>Capital</th>
                </tr>

            </thead>
            <tbody>
                {filas}
            </tbody>
        </table>
    )
}
export default Tabla;