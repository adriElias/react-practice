function BolaX(props) {
    const { talla, margen, fondo } = props;
    const estilo = {
        borderRadius: "50%",
        display: "inline-block",
        width: talla,
        height: talla,
        backgroundColor: fondo,
        margin: margen
    };
    return <div style={estilo}></div>;
}
export default BolaX;