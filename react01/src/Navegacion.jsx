function Navegacion(props){
    const estilo = {
        width: "100%",
        backgraund: "yelow",
        height: "50px",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px"
    }
    const estilo2 = {
        color: props.color
    }
    return(
        <div style={estilo}>
            <h1 style={estilo}>{props.titulo}</h1>
        
        </div>

    )
}
export default Navegacion