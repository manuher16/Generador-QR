import React from "react";
import { Container, Row, Col, Card, Image, ListGroup } from "react-bootstrap";
const VCard = (props) => {
  const styleCard = {
    width: '',
    height: 'auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    backgroundColor: 'white'
  }
  const styleCol = {
    border: '1px solid #ccc',
    margin: '0',
    padding: '0'
  }
  const styleRowContact = {
    margin: '0',
    padding: '0'
  }
  return (
    <Card style={styleCard}>
      <Card.Body>
        <Image width={150} height={150} src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" roundedCircle />
        <Card.Title><h2>Jon Dae</h2></Card.Title>
        <Card.Subtitle>CEO</Card.Subtitle>
      </Card.Body>
      <Row className="mx-0 px-0 ">
        <Col style={styleCol}>
          <ListGroup as="ol" >
            <ListGroup.Item
              as="li"
              className=""
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <h2>
                    <i class="bi bi-telephone"></i>
                  </h2>
                </div>
                Telefono
              </div>

            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col style={styleCol}>   <ListGroup as="ol" >
          <ListGroup.Item
            as="li"
            className=""
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h2>
                  <i class="bi bi-envelope"></i>
                </h2>
              </div>
              Email
            </div>

          </ListGroup.Item>
        </ListGroup></Col>
        <Col style={styleCol}>   <ListGroup as="ol" >
          <ListGroup.Item
            as="li"
            className=""
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h2>
                  <i class="bi bi-geo-alt"></i>
                </h2>
              </div>
              Direccion
            </div>

          </ListGroup.Item>
        </ListGroup></Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item >
              <Row className="d-flex justify-content-start">
                <Col md={2}>
                </Col>
                <Col md={10} >
                  <div className="d-flex justify-content-start">

                    Ofrezco trabajo como freelance. Cuento con más de 10 años de experiencia en diseño gráfico. ¡No dude en ponerse en contacto!
                  </div>
                </Col>

              </Row>
            </ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </  Card>
  );
};
export default VCard;
