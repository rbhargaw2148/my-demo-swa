import { Row, Col,Modal, Button} from 'react-bootstrap'

const EditContactModal = ({roles, onModalClose, contactInfo}) => {
    const contact = contactInfo ? contactInfo : {};
    return (
        <Modal show={true} onHide={onModalClose} >
            <Modal.Header closeButton>
                <h3>Edit Contact</h3>
            </Modal.Header>
            <Modal.Body className="form">
                
                <form>
                <Row>
                    <Col md={4} className="control">
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        defaultValue={contact.firstName}
                    />
                    </Col>
                    <Col md={4} className="control">
                    <label>Middle Name:</label>
                    <input 
                        type="text" 
                        name="middleName" 
                        defaultValue={contact.middleName}
                    />
                    </Col>
                    <Col md={4} className="control">
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName"
                        defaultValue={contact.lastName} 
                    />
                    </Col>      
                </Row>
                <div className="control">
                    <label>E-Mail:</label>
                    <input type="email"
                    defaultValue={contact.email}/>
                </div>
                <div className="control">
                    <label>Firm/ Agency:</label>
                    <input type="text"/>
                </div>
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
                    <label>State</label>
                    <input type="text"/>
                </Col>
                <Col md={4} className="control">
                    <label>Zip Code:</label>
                    <input type="text"/>
                </Col>
                </Row>
                <Row>
                    <Col md={4} className="control">
                        <label>Area Code</label>
                        <input type="text" />
                    </Col>
                    <Col md={4} className="control">
                        <label>Phone Number (XXX-XXXX)</label>
                        <input type="text" />
                    </Col>
                    <Col md={4} className="control">
                        <label>Ext</label><input type="text"/>
                    </Col>
                </Row>
                
               
            </form>
            </Modal.Body>
            <Modal.Footer>
                    <Button type="button" onClick={onModalClose}>Cancel</Button>
                    <Button type="button">Update</Button>
            </Modal.Footer>
            
        </Modal>
    )
}

export default EditContactModal
