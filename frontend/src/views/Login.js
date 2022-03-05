import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { showSnackbar } from "../app/modules/Snackbar"
import { useDispatch } from 'react-redux';
import { login } from '../app/modules/session'
import { useNavigate } from 'react-router-dom'
const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handlerEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlerPassword = (e) => {
        setPassword(e.target.value);
    }
    const styleCard = {
        marginTop: '20%',
        position: 'relative',
        width: "300px",
        height: "auto",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
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
    const loginUser = async () => {
        console.log(email, password);
        axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
            email: email,
            password: password
        }).then(res => {
            dispatch(showSnackbar({
                message: "Haz iniciado sesion",
                color: "#90EE90",
                timeout: 3000,
                top: true
            }));
            dispatch(login(res.data));
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('session', true);
                navigate('/dashboard')
            } else {

                dispatch(showSnackbar({
                    message: "Error al inicar sesion",
                    color: "error",
                    timeout: 4000,
                    top: true
                }));
            }


        }).catch(err => {
            console.log(err);
            dispatch(showSnackbar({
                message: "Error al inicar sesion",
                color: "error",
                timeout: 4000,
                top: true
            }));
        })

    }
    return (
        <Container>
            <Card style={styleCard}>
                <Card.Header>
                    <Card.Title>Inicio de sesion</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese correo" onChange={e => handlerEmail(e)} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" onChange={e => handlerPassword(e)} />
                        </Form.Group>
                        <Form.Group>

                            <Button variant="primary" onClick={loginUser}>
                                Entrar
                            </Button>
                        </Form.Group>
                    </Form>

                </Card.Body>
                <hr />
                <Card.Subtitle>Iniciar con</Card.Subtitle>
                <Card.Body>
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
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Login;