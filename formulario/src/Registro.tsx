import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Esquema de validación con Yup
const schema = yup.object().shape({
    email: yup
        .string()
        .required('El email es obligatorio')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email no válido'),
    password: yup
        .string()
        .required('El password es obligatorio')
        .min(8, 'Debe contener al menos 8 caracteres')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#&])[A-Za-z\d$@#&]{8,}$/,
            'El password debe contener al menos: Un número, una letra mayúscula, una minúscula, y uno de los siguientes caracteres: $@#&'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
        .required('Confirma tu contraseña'),

});

function Registro() {
    const {
        register,
        handleSubmit,
        formState
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <Button className="m-3" variant='secondary' onClick={handleShow}>Register</Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form id='registerForm' onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email" required
                                placeholder="Enter email"
                                {...register('email')} //desestructuracion de UseForm
                                isInvalid={!!formState.errors.email} // convertir a boolean
                            />
                            <Form.Control.Feedback type="invalid">
                                {formState.errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password" required
                                placeholder="Password"
                                {...register('password')} //desestructuracion de UseForm
                                isInvalid={!!formState.errors.password} // convertir a boolean
                            />
                            <Form.Control.Feedback type="invalid">
                                {formState.errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPasswordConfirmation">
                            <Form.Label>Password confirmation</Form.Label>
                            <Form.Control
                                type="password" required
                                placeholder="Password confirmation"
                                {...register('passwordConfirmation')}//desestructuracion de UseForm
                                isInvalid={!!formState.errors.passwordConfirmation} // convertir a boolean
                            />
                            <Form.Control.Feedback type="invalid">
                                {formState.errors.passwordConfirmation?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" type='submit' form='registerForm'>
                        Register
                    </Button>
                </Modal.Footer>

            </Modal>


        </>
    );
}

export default Registro;