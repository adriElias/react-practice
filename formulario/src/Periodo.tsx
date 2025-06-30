import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';  // archivo de estilo principal 
import 'react-date-range/dist/theme/default.css';  // archivo CSS del tema

const getDaysBetween = (startDate: Date, endDate: Date): Date[] => {
    const dates = []; //creo un array vacio llamado dates
    const current = new Date(startDate); //current será igual al incio de la fecha

    //recorre esto hasta que current sea <= al fin de la fecha
    while (current <= endDate) {
        dates.push(new Date(current)); // Clonamos la fecha actual y lo ponemos en el array
        current.setDate(current.getDate() + 1); // Avanzamos al siguiente día mientras no se cumpla la función
    }

    return dates;
}

export const Periodo = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = (ranges: RangeKeyDict) => {
        const { selection: { endDate, startDate } } = ranges;//desestructuración

        console.log('Se ejecuta onChange: ', endDate, startDate)
        if(startDate){
            setStartDate(startDate);
        }
        if(endDate){
             setEndDate(endDate);
        }
       
    }
    const daysBetween = getDaysBetween(startDate, endDate);
    console.log("Días entre dos fechas: ", daysBetween);

    const selectionRange = {
        startDate: new Date(),
        endDate: null,
        key: 'selection',
    }

    return (
        <Container>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />

            <Card className="mt-3">
                <Card.Body>
                </Card.Body>
            </Card>

        </Container>
    );


}