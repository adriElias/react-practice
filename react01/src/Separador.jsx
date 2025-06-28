function Separador() {
    const estiloSuperior = {
        display: 'block',
        height: '1px',
        background: '#000000'
    }
    const estiloInferior = {
        display: 'block',
        height: '3px',
        background: '#000000'
    }
    const espacio = {
        display: 'block',
        height:'4px'
    }

    return (
        <>
            <div style={estiloSuperior}></div>
            <div style={espacio}></div>
            <div style={estiloInferior}></div>
        </>


    )
}
export default Separador;