import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosquito} from '@fortawesome/free-solid-svg-icons';

function Mosca(props) {

    const color = props

    const estilo = {
        color
    }

    return <FontAwesomeIcon icon={faMosquito}style = {color}/>

}
export default Mosca;


