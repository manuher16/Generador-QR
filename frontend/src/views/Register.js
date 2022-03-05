import React from 'react'
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../app/modules/Snackbar'
const Register = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const styleCard = {
        position: 'relative',
        maxWidth: "500px",
        height: "auto",
        left: "50%",
        marginTop: "20px",
        transform: "translate( -50%)",
    }
    const handlerPassword = (e) => {
        setPassword(e.target.value)
    }
    const handler2Password = (e) => {
        setPassword2(e.target.value)
    }
    const handlerEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlerName = (e) => {
        setName(e.target.value)
    }
    const handlerLastName = (e) => {
        setLastname(e.target.value)
    }

    const responseGoogle = (response) => {
        console.log(response);
    }
    const componentClicked = () => {
        console.log("clicked");
    }
    const responseFacebook = (response) => {
        console.log(response);
    }

    const register = () => {
        if (password === password2) {
            axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
                email,
                name: name + " " + lastname,
                password
            }).then(res => {
                dispatch(showSnackbar({
                    message: "Haz creado tu cuenta",
                    color: "success",
                    timeout: 4000,
                    top: true
                }))
                window.location.href = ('/login')
            }).catch(({ error }) => {
                console.log(error);
                dispatch(showSnackbar({
                    message: "No se pudo crear tu ceunta verifica tus datos",
                    color: "error",
                    timeout: 4000,
                    top: true
                }))
            })
        }
        console.log("register");
    }
    return (
        <Container>
            <Card style={styleCard}>
                <Card.Header>
                    <h1>Registrate</h1>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su nombre" onChange={e => handlerName(e)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su apellido" onChange={e => handlerLastName(e)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su correo" onChange={e => handlerEmail(e)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese una contraseña" onChange={e => handlerPassword(e)} />
                        </Form.Group>
                        <Form.Group controlId="formBasic2Password">
                            <Form.Label>Repetir contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Repita su contraseña" onChange={e => handler2Password(e)} />
                        </Form.Group>

                    </Form>
                </Card.Body>

                <Card.Footer>
                    <Row>
                        <Col>
                            <Button onClick={register}>Registrarse</Button>
                        </Col>
                    </Row>


                </Card.Footer>
                <Card.Footer>
                    <Card.Subtitle>Registrarse con</Card.Subtitle>
                    <Row>
                        <Col> <FacebookLogin
                            appId="658011408902820"

                            size="small"
                            textButton="Facebook"

                            onClick={componentClicked}
                            callback={responseFacebook} /></Col>
                        <Col> <GoogleLogin
                            clientId="780603789160-k9i8p2sd182qretuuiqrvksuanjucfi1.apps.googleusercontent.com"
                            buttonText="Google"

                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    )
}
export default Register