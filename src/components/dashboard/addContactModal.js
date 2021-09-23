import { Form, Row, Col,Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import Select from 'react-select'

const AddContactModal = (props) => {
    const {roles, onModalClose} = props;
    const contactType = useState(props.contactType ? props.contactType : "" );
    const [showContactType, setShowContactType] = useState(false);

    const orgTypes = [
        {value: "APQ", label: "Air Pollution Control, Quality Management District"},
        {value: "AD", label: "Airport District"},
        {value: "B", label: "Bank"},
        {value: "BC", label: "Bond Counsel"},
        {value: "CG", label: "City / Government"},
        {value: "CCD", label: "Community College District"},
        {value: "CSD", label: "County Sanitation District"}
    ]
    const divisions = [
        {value: "FP", label: "Financial Participant"},
        {value: "LI", label: "Local Issuers"},
        {value: "NI", label: "National Issuers"},
        {value: "PI", label: "Private Issuers"},
        {value: "SI", label: "State Issuers"},
        {value: "SLCI", label: "Student Loan Corp Issuers"},
    ]

    return (
        <Modal show={true} onHide={onModalClose} >
            <Modal.Header closeButton>
                <h3>Add {contactType === 'organization' ? 'Organization' : 'Contact'}</h3>
            </Modal.Header>
            <Modal.Body className="form">
                {roles && <div className="control">
                <label>Role</label>
                <Form.Select onChange={()=>setShowContactType(true)}>
                    <option>Select</option>

                    {Object.entries(roles).map(([roleId, roleDesc]) => {
                        return(<option key={roleId} value={roleId} >{roleDesc}</option>)
                    }
                    )
                    }
                </Form.Select>
                </div>
                }
                {showContactType && <div><label>Contact Type: </label><div style={{display: 'flex'}}>
                    <Form.Check type="radio" name="contactType" label="Organization" />

                    <Form.Check type="radio" name="contactType" label="Individual" />
                </div>
                <br/>
                </div>
                }
                <form>
                    
                    {contactType === 'organization' ? <div className="organizationForm">
                        <Row>
                            <Col md={6} className="control">
                            <label>Organization Name:</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                
                            />
                            </Col>
                            <Col md={6} className="control">
                            <label>Org Short Name:</label>
                            <input 
                                type="text" 
                                name="middleName" 
                            />
                            </Col>
                        </Row>
                        <div>
                            <label>Orgnanization Type</label>
                            <Select 
                            options={orgTypes}/>
                        </div>
                        <div>
                            <label>Division</label>
                            <Select 
                            options={divisions}/>
                        </div>
                        {/* <div>
                            <label>CFD Agency Type</label>
                            <Select 
                            options={orgTypes}/>
                        </div> */}
                    </div> :
                    <div className="contactForm">
                    <Row>
                        <Col md={4} className="control">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            
                        />
                        </Col>
                        <Col md={4} className="control">
                        <label>Middle Name:</label>
                        <input 
                            type="text" 
                            name="middleName" 
                        />
                        </Col>
                        <Col md={4} className="control">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            name="lastName"
                        />
                        </Col>      
                    </Row>
                    <div className="control">
                        <label>E-Mail:</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="control">
                        <label>Firm/ Agency:</label>
                        <input type="text"/>
                    </div>
                </div>
                    }
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
                    <Button type="button">Save</Button>
            </Modal.Footer>
            
        </Modal>
    )
}

export default AddContactModal
