import { useState } from "react";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from 'react-bootstrap/Card';
// Fuente: https://quickref.me/get-the-day-of-the-year-from-a-date.html
const getDayOfTheYear = (date: Date) => Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

export const Fecha = () => {
    const [startDate, setStartDate] = useState(new Date());
    const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dayOfTheYear = getDayOfTheYear(startDate);
    const percentageYear = ((dayOfTheYear / 365) * 100).toFixed(2);//cantidad de decimales 2

    console.log(startDate);

    const handleSelect = (date: Date | null) => {
        setStartDate(date as Date);
    }


    return (
        // https://www.npmjs.com/package/react-datepicker
        <Container>
            <DatePicker
                selected={startDate}
                dateFormat={"dd/MM/yyyy"}
                onChange={handleSelect}
            />
            <Card className="mt-3">
                <Card.Body>
                    Día de la semana: {diaSemana[startDate.getDay()]} <br/>
                    Días transcurridos desde el principio de año: {dayOfTheYear}<br/>
                    Días del año que quedan: {dayOfTheYear - 365}<br/>
                    % del año gastado: {percentageYear}<br/>

                </Card.Body>
            </Card>

        </Container>
    );
}

