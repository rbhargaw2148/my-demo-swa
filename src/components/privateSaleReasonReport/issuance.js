//import {useState} from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import Card from '../ui/Card'

const Issuance = (props) => {
    const validateForm = (e) => {
        props.openWidget('negotiatedRefunding');
    }
    return (
        <Card>
            <div className="form">
                <h3>Issuance</h3>
            <div>
                <label>CDIAC Number</label>
                <Form.Control type="text" value="2019-0001" disabled/>
            </div>
            <Row>
            <Col>
                <label>Issuer</label>
                <Form.Control type="text" value="City of San Fransisco" disabled/>
            </Col>
            <Col>
                <label>Issue Name</label>
                <Form.Control type="text" disabled/>
            </Col>
            </Row>
            
            <Row>
                <Col>
                <label>Project Name</label>
                <Form.Control type="text" value="Windemere Ranch Series A" disabled/>
                </Col>
            </Row>
            <Row>
            <Col>
                <label>Actual Sale Date</label>
                <Form.Control type="text" value="06/05/2017" disabled/>
            </Col>
            <Col>
                <label>Date of Filing</label>
                <Form.Control type="text" value="01/03/2017" disabled/>
            </Col>
            </Row>

            <div className="btn-div">
            <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
            </div>
            </div>
        </Card>
    )
}

export default Issuance
