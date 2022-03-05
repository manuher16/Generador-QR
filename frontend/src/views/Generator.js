import React from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import styles from "../styles"
import { useState, useEffect } from 'react';
import { FacebookShareButton } from 'react-share'
import { FacebookIcon } from 'react-share'
const Generador = () => {
    const [text, setText] = useState("");
    const sytleTextarea = {
        position: 'relative',
        width: "300px",
        left: "50%",
        transform: "translateX(-50%)",
    }
    const styleButton = {
        "margin-top": "20px"
    }

    useEffect(() => {

    }, [])
    return (
        <Container>
            <Card style={styles.cardWithoutBorder}>
                <Card.Title>
                    <h1>Genera tu codigo QR</h1>
                </Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formTextArea">
                            <Form.Label>Texto</Form.Label >
                            <Form.Control onChange={e => setText(e.target.value)} controlId="textArea" style={sytleTextarea} required type="text" as="textarea" placeholder="Escribe algo..." rows={8} />
                            <Form.Control.Feedback type="invalid">
                                Debe escribir antes de generar un codigo
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" style={styleButton}>Generar</Button>
                    </Form>
                </Card.Body>
                <Card.Body>
                    <Row>
                        <Col><FacebookShareButton >
                            <FacebookIcon round size="30px" /> Compartir</FacebookShareButton></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Generador;