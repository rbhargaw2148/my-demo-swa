import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import Card from '../ui/Card'
const ContactInformation = (props) => {
    const validateForm = () => {
        props.openWidget('comments');
    }
    return (
        <Card>
            <div className="form">
            <div>
                <label>Filing Contact Name</label>
                <Form.Control type="text" />
            </div>
            <Row>
            <Col>
                <label>Agency/Organization Name</label>
                <Form.Control type="text" />
            </Col>
            </Row>
            <Row>
            <Col>
                <label>Address</label>
                <Form.Control type="text"/>
            </Col>
            </Row>
            <Row>
            <Col>
                <label>City</label>
                <Form.Control type="text"/>
            </Col>
            <Col>
                <label>State</label>
                <Form.Control type="text"/>
            </Col>
            <Col>
                <label>Zip Code</label>
                <Form.Control type="text"/>
            </Col>
            </Row>
            <Row>
                <Col>
                    <label>Telephone</label>
                    <Form.Control type="text"/>
                </Col>
                <Col>
                    <label>Fax Number</label>
                    <Form.Control type="text"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <label>E-mail Address</label>
                    <Form.Control type="text"/>
                </Col>
            </Row>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>
        </Card>
    )
}

export default ContactInformation
