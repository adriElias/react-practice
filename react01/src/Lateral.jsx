function Lateral(props) {
    const estilo = {
        width: "200px",
        backgraund: "lightbluew",
        height: "50px",
        position: "fixed",
        left: 0,
        top: 50,
        padding: "20px"
    }
    const lista = ["Uno", "Dos", "Tres", "Cuatro"]

    const lis = props.lista.map(e => <li>{e}</li>)

    return (
        <div style={estilo}>
            <ul>
                {lis}
            </ul>

            <button onClick={() => props.setIdioma("es")}>ES</button>
            <button onClick={() => props.setIdioma("ca")}>CAT</button>
        </div>
    )
}
export default Lateral;