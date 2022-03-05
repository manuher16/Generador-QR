import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from '../app/modules/Snackbar'
const Snackbar = (props) => {
    const snackbar = useSelector(state => state.snackbar);
    const dispatch = useDispatch();
    if (snackbar.show) {
        setTimeout(() => {
            dispatch(hideSnackbar());
        }, snackbar.timeout ? snackbar.timeout : 3000);
    }
    const style = {
        position: 'fixed',
        left: '50%',
        width: "500px",
        top: snackbar.top ? snackbar.top : (snackbar.bottom ? snackbar.bottom : '10%'),
        height: 'auto',
        transform: 'translate( -50%, -50%)',
        backgroundColor: snackbar.color ? snackbar.color : '#721b65',
        color: "white",
        display: snackbar.show ? 'block' : 'none',
        "z-index": '9999',

    }
    const styelBtn = {
        cursor: 'pointer',
        height: '40px',
        scale: '1.5',

    }
    return (
        <Card style={style} class="my-0 py-0">
            <Card.Body>
                <Row>
                    <Col md={10}>{snackbar.message}</Col>|
                    <Col>



                        <i class="bi bi-x" onClick={() => dispatch(hideSnackbar())} style={styelBtn}></i>



                    </Col>
                </Row>
            </Card.Body>
        </Card>

    )
}
export default Snackbar;