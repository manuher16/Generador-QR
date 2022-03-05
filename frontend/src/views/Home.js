import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
    const [imageQR, setImageQR] = useState(null);
    useEffect(() => {

    }, [])
    const styleContainer = {
        "height": '500px',
    }
    const styelQRImage = {

        width: '300px',
        height: '300px',
    }
    const styleCard = {
        'max-width': '800px',
        left: '50%',
        top: '30px',
        transform: 'translate(-50%)',
        border: '0px solid black',

    }
    const styleRowSocials = {
        position: 'relative',
        width: '250px',
        left: "50%",
        transform: 'translate(-50%)',
    }
    return (
        <Container style={styleContainer}>
            <Card style={styleCard} bg="rgb(0,0,0)">
                <Card.Title>
                    <h1>Genere su codigo QR</h1>
                </Card.Title>
                <Card.Text>
                    Genera un codigo QR con el texto que desee y compartalo en us redes sociales
                </Card.Text>
                <Card.Text>
                    <Image src="./Orson_Hernandez.png" style={styelQRImage} />
                </Card.Text>
                <Card.Text>
                    <Row style={styleRowSocials}>
                        <Col><h1><i class="bi bi-facebook"></i></h1></Col>
                        <Col>
                            <h1><i class="bi bi-instagram"></i></h1>
                        </Col>
                        <Col>
                            <h1><i class="bi bi-twitter"></i></h1>
                        </Col>
                    </Row>
                </Card.Text>

            </Card>
        </Container>
    )
}
export default Home;