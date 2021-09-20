import {Form, Modal, Row, Col} from 'react-bootstrap'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
const EditContact = (props) => {
    const {onModalClose, contact, formType} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>{formType ? "Add" : "Edit" } Contact</h3></Modal.Header>
            <Modal.Body>
                <Row>
                        <Col md={4} className="control">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={contact && contact.fname}
                        />
                        </Col>
                        <Col md={4} className="control">
                        <label>Middle Name:</label>
                        <input 
                            type="text" 
                            name="middleName" 
                            value={contact && contact.mname}
                        />
                        </Col>
                        <Col md={4} className="control">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            name="lastName"
                            value={contact && contact.lname}
                        />
                        </Col>      
                    <div className="control">
                        <label>E-Mail:</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="control">
                        <label>Firm/ Agency:</label>
                        <input type="text"/>
                    </div>
                </Row>
                <Row>
                        <Col md={6} className="control">
                            <label>Address Line1:</label>
                            <input type="text"/>
                        </Col>
                        <Col md={6} className="control">
                            <label>Address Line2:</label>
                            <input type="text"/>
                        </Col>
                        <Col md={6} className="control">
                            <label>Address Line3:</label>
                            <input type="text"/>
                        </Col>
                        <Col md={6} className="control">
                            <label>Address Line4:</label>
                            <input type="text"/>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={4} className="control">
                        <label>City:</label>
                        <input type="text"/>
                    </Col>
                    <Col md={4} className="control">
                        <label>State:</label>
                        <input type="text"/>
                    </Col>
                    <Col md={4} className="control">
                        <label>Zip Code:</label>
                        <input type="text"/>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="control">
                            <label>Area Code: </label>
                            <input type="text" />
                        </Col>
                        <Col md={4} className="control">
                            <label>Phone Number (XXX-XXXX):</label>
                            <input type="text" />
                        </Col>
                        <Col md={4} className="control">
                            <label>Ext:</label><input type="text"/>
                        </Col>
                    </Row>
                <div style={{display: 'flex'}}>
                    <Form.Check type="checkbox" label="Active?" />
                    <MDBTooltip domElement tag="span" placement="right">
                        <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                        <span>Only active values are displayed in the User Interface</span>
                    </MDBTooltip>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="custom-button-secondary  btn-secondary" onClick={onModalClose}>Cancel</button>
                <button className="custom-button">Update</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditContact
