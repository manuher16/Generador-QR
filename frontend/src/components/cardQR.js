import React from 'react';
import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { useState } from 'react';
const CardQR = (props) => {
    const [hoverMenu, activeMenu] = useState(false);

    const styleHoverMenu = {
        display: hoverMenu ? 'flex' : 'none'

    }
    console.log(styleHoverMenu)
    const styleCard = {
        textAlign: 'start'
    }


    const styleBtn = {
        color: 'blue',
        backgroundColor: 'white',
        border: '0px ',

        fontSize: '20px'
    }
    const styleCol = {
        marginTop: '15px',

    }
    return (
        <Col md={12} style={styleCol}>
            <Card className="cardQR" aling="start" style={styleCard}>

                <Card.Body>
                    <Row className=" align-items-center">
                        <Col className="order-md-3">
                            <Image src="qr.png" fluid />
                        </Col>
                        <Col md={5} className="order-md-1" >
                            <Card.Text className="lead">Tipo QR</Card.Text>
                            <Card.Text>

                                <h3> <i class="bi bi-person-video2"></i> Orson Hernandez</h3>
                            </Card.Text>
                            <Card.Text className="lead">
                                <Row>
                                    <Col>
                                        <i class="bi bi-folder"></i> Folder
                                    </Col>
                                    <Col><i class="bi bi-link-45deg"></i> Link</Col>
                                </Row>
                            </Card.Text>
                            <Card.Text className="lead"><i class="bi bi-clock"></i>  Nov 10, 2021</Card.Text>
                        </Col>
                        <Col md={2} className="order-md-2">
                            <Row >
                                <Col>
                                    <Row>
                                        <Col>
                                            <h3>1</h3>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col>
                                            <Card.Text><h5>Escaneos</h5></Card.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card.Text>
                                                <Button style={styleBtn} className="px-0">Detalles <i class="bi bi-arrow-right"></i></Button>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="order-md-4">
                            <Row>

                                <Card className="my-2 " varint="light" onMouseEnter={() => activeMenu(true)} onMouseLeave={() => activeMenu(false)} className="px-1" >
                                    <Button variant="secondary" className=" mx-0 px-0">Descargar</Button>
                                    <Row style={styleHoverMenu}>
                                        <Col>
                                            <Button variant="trasparent" className="px-0">
                                                <i class="bi bi-pen"></i>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant="trasparent" className="px-0">
                                                <i class="bi bi-palette">
                                                </i>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant="trasparent" className="px-0">
                                                <i class="bi bi-folder-fill"></i>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button variant="trasparent" className="px-0">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default CardQR;