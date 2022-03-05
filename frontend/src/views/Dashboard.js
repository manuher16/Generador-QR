import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import VCard from '../components/vCard'
const Dashboard = () => {
    const types = {
        URL: "url",
        TEXT: "text",
        VCARD: "vcard",
        EMAIL: "email",
        SMS: "sms",
        WIFI: "wifi",
        TWITTER: "twitter",
        FACEBOOK: "facebook",
        PDF: "pdf",
        IMAGE: "image",
        MP3: "mp3",
        APP_STORE: "appstore",
    }
    const [type, setType] = useState(types.URL);
    const [previewType, setPreview] = useState(null)
    const selectedType = (type) => {

        if (type === types.VCARD) {
            setPreview(<VCard />)
        }
    }
    const styelRow = {
        marginTop: '30px',
    }
    const styleCol = {
        marginTop: '10px',
    }
    const styelBtn = {
        minWidth: '130px'
    }
    const Options = [
        {
            label: "URL",
            icon: <i class="bi bi-link"></i>,
            type: types.URL
        },
        {
            label: "VCARD",
            icon: <i class="bi bi-link"></i>,
            type: types.VCARD
        },
        {
            label: "TEXTO",
            icon: <i class="bi bi-link"></i>,
            type: types.TEXT
        },
        {
            label: "Correo",
            icon: <i class="bi bi-link"></i>,
            type: types.EMAIL
        },
        {
            label: "SMS",
            icon: <i class="bi bi-link"></i>,
            type: types.SMS
        },
        {
            label: "WIFI",
            icon: <i class="bi bi-link"></i>,
            type: types.WIFI
        },
        {
            label: "TWITTER",
            icon: <i class="bi bi-link"></i>,
            type: types.TWITTER
        },
        {
            label: "facebook",
            icon: <i class="bi bi-link"></i>,
            type: types.FACEBOOK
        },
        {
            label: "PDF",
            icon: <i class="bi bi-link"></i>,
            type: types.PDF
        },
        {
            label: "mp3",
            icon: <i class="bi bi-link"></i>,
            type: types.MP3
        },
        {
            label: "appstore",
            icon: <i class="bi bi-link"></i>,
            type: types.APP_STORE
        },
        {
            label: "imagenes",
            icon: <i class="bi bi-link"></i>,
            type: types.IMAGE
        },
    ]
    let menuOptions = []
    Options.forEach((option, index) => {
        menuOptions.push(<Col md={2} key={index} style={styleCol}><Button style={styelBtn} variant="light" onClick={() => selectedType(option.type)}>{option.icon} {option.label.toUpperCase()}</Button></Col>)
    })
    return (
        <Container fluid>
            {type}
            <Row style={styelRow}>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Row>
                                {menuOptions}
                            </Row>
                            <Row>

                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    {previewType}
                </Col>
            </Row>
        </Container>
    );
}
export default Dashboard;