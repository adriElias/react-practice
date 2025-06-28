function CuadradoB(props) {
   const { talla, margen, grosor, color } = props;
    const estilo = {
        display: "inline-block",
        width: talla,
        height: talla,
        backgroundColor: color,
        margin: margen,
        border: grosor
    };
    return <div style={estilo}></div>;

}

export default CuadradoB;