import {Modal, Col, Row} from 'react-bootstrap'
import Select from 'react-select'

const AddAuthorization = (props) => {
    const {onModalClose, formType} = props;
    const origins = [
        {value:"E", label:"Elections"},
        {value:"I", label:"Issues"}
    ]
    const authInfo = props.authInfo ? props.authInfo : null;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Add Authorization</h3></Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6} className="control">
                    <label><span className="required">*</span>Organization Name:</label>
                    <input 
                        type="text" 
                        name="orgName" 
                    />
                    </Col>
                    <Col md={6} className="control">
                    <label><span className="required">*</span>Authorization Name:</label>
                    <input 
                        type="text" 
                        name="middleName" 
                    />
                    </Col>
                </Row>
                      
                        <Row>
                        <Col md={6} className="control">
                            <label><span className="required">*</span>Origin:</label>
                            <Select options={origins}/>
                        </Col>
                        <Col md={6} className="control">
                            <label><span className="required">*</span>Election Date:</label>
                            <input type="date"/>
                        </Col>
                        <Col md={6} className="control">
                            <label><span className="required">*</span>Authorization Amount:</label>
                            <input type="text"/>
                        </Col>
                    </Row>                
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="custom-button-secondary  btn-secondary" onClick={onModalClose}>Cancel</button>
                <button className="custom-button">Save</button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddAuthorization
