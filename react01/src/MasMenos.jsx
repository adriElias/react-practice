import { useState } from "react";

function MasMenos() {

    const [valor, setValor] = useState(0);

    // function menos (){
    //     setValor(valor-1)
    // }
    // function mas (){
    //     setValor(valor+1)
    // }
    // const mas = () => setValor(valor < 10 ? valor + 1: 10);
    // const menos = () => setValor(valor > 10 ? valor - 1: 0)
    return (
        <>
            <div>
                <button className="menos" disabled={valor==0} onClick={() => setValor(valor > 0 ? valor - 1: 0)}>-</button>

                <input type="number" value={valor} disabled />

                <button className="mas" disabled={valor==10} onClick={() => setValor(valor < 10 ? valor + 1: 10)}>+</button>
            </div>
        </>
    )
}
export default MasMenos;
