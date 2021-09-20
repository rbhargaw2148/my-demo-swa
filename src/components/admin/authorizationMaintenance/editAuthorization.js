import {Modal, Col, Row} from 'react-bootstrap'
import Select from 'react-select'

const EditAuthorization = (props) => {
    const {onModalClose, authInfo} = props;
    const origins = [
        {value:"E", label:"Elections"},
        {value:"I", label:"Issues"}
    ]
    console.log(authInfo);
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Edit Authorization</h3></Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6} className="control">
                    <label>Organization Name:</label>
                    <input 
                        type="text" 
                        name="orgName" 
                        value={authInfo.orgName}
                        disabled
                    />
                    </Col>
                    <Col md={6} className="control">
                    <label><span className="required">*</span>Authorization Name:</label>
                    <input 
                        type="text" 
                        name="middleName" 
                        value={authInfo.authorization}
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
                            <input type="date" value={new Date()}/>
                        </Col>
                        <Col md={6} className="control">
                            <label><span className="required">*</span>Authorization Amount:</label>
                            <input type="text" value={authInfo.authAmount}/>
                        </Col>
                    </Row>                
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="custom-button-secondary  btn-secondary" onClick={onModalClose}>Cancel</button>
                <button className="custom-button">Update</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditAuthorization
