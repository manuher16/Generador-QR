import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ListCodeQr from '../components/ListCodeQR';
const Manage = () => {
    return (
        <Container fluid>

            <h1>Manage</h1>
            <Row>
                <Col md={3}>Menu</Col>
                <Col>
                    <ListCodeQr />
                </Col>
            </Row>
        </Container>
    );
}
export default Manage;