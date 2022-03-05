import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardQR from './cardQR'
const ListCodeQR = (props) => {
    let list = []
    for (let i = 0; i < 5; i++) {
        list.push(<CardQR />)
    }
    return (
        <Row>

            {list}
        </Row>
    )
}
export default ListCodeQR