import {Form, Modal, Row, Col} from 'react-bootstrap'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
import Select from 'react-select'


const AddFinancePurposeForm = (props) => {
    const {onModalClose} = props;
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
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>New Organization</h3></Modal.Header>
            <Modal.Body>
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
                <div style={{display: 'flex'}}>
                    <Form.Check type="checkbox" label="Active?" defaultChecked/>
                    <MDBTooltip domElement tag="span" placement="right">
                        <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                        <span>Only active values are displayed in the User Interface</span>
                    </MDBTooltip>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="custom-button-secondary  btn-secondary" onClick={onModalClose}>Cancel</button>
                <button className="custom-button">Save</button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddFinancePurposeForm
