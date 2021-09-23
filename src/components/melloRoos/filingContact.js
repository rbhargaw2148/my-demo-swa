import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import Card from '../ui/Card'
const FilingContact = (props) => {
    const validateForm = () => {
        props.openWidget('comments');
    }
    return (
        <Card>
            <div className="form">
                <h3>Filing Contact</h3>
                <Row>
                <Col>
                    <label>First Name</label>
                    <Form.Control type="text" value="John" disabled/>
                </Col>
                <Col>
                    <label>Middle Name</label>
                    <Form.Control type="text" value="" disabled/>
                </Col>
                <Col>
                    <label>Last Name</label>
                    <Form.Control type="text" value="Doe" disabled/>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Title</label>
                        <Form.Control type="text" value="Public Finance Director" disabled/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Firm/Agency</label>
                        <Form.Control type="text" value="ABAG Finance Authority for Nonprofit Corporations CFD No 2004-2" disabled/>
                    </Col>
                </Row>
            <Row>
            <Col md={6}>
                <label>Address Line 1</label>
                <Form.Control type="text" value="915 Capital Mall" disabled/>
            </Col>
            <Col md={6}>
                <label>Address Line 2</label>
                <Form.Control type="text" disabled/>
            </Col>
            <Col md={6}>
                <label>Address Line 3</label>
                <Form.Control type="text" disabled/>
            </Col>
            <Col md={6}>
                <label>Address Line 4</label>
                <Form.Control type="text" disabled/>
            </Col>
            </Row>
            <Row>
            <Col>
                <label>City</label>
                <Form.Control type="text" value="Sacramento" disabled/>
            </Col>
            <Col>
                <label>State</label>
                <Form.Control type="text" value="CA" disabled/>
            </Col>
            <Col>
                <label>Zip Code</label>
                <Form.Control type="text" value="98433" disabled/>
            </Col>
            </Row>
            <Row>
                <Col>
                    <label>Area Code</label>
                    <Form.Control type="text" value="916" disabled/>
                </Col>
                <Col>
                    <label>Telephone</label>
                    <Form.Control type="text" value="261-2633" disabled/>
                </Col>
                <Col>
                    <label>Ext</label>
                    <Form.Control type="text" valuw="102" disabled/>
                </Col>
            </Row>
            <Row>
                <Col>
                <label>E-mail Address</label>
                    <Form.Control type="text" value="John.Doe@qualapps.com" disabled/>
                </Col>
            </Row>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>
        </Card>
    )
}

export default FilingContact
