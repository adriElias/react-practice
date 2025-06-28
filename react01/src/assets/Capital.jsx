

function Capital(props) {
    const nom = props.nom;
    const inicial = nom.slice(0, 1);  
    const capitalLetter = {
        fontSize : "200px",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily : "serif",
        margin: 0,
        lineHeight : "200px"
    }
    const word = {
        fontSize : "30px",
        textAlign: "center",
        textTransform: "capitalize",
        margin: 0
    }

    return (
        <div>
            <div style={capitalLetter}>{inicial}</div>
            <div style={word}>{nom}</div>
        </div>
    )
}

export default Capital;
