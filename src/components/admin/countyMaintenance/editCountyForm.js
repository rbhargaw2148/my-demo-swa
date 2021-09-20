import {Form, Modal} from 'react-bootstrap'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
const EditCountyForm = (props) => {
    const {onModalClose, financialPurpose, groupValue} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Edit County</h3></Modal.Header>
            <Modal.Body>
                <div className="control">
                    <label><span className="required">* </span>Region: </label>
                    <input value={groupValue} disabled/>
                </div>
                {/* <div className="control">
                    <label><span className="required">* </span>County Code: </label>
                    <input maxLength="6" disabled value={financialPurpose.code}/>
                </div> */}
                <div className="control">
                    <label><span className="required">* </span>County Name: </label>
                    <input maxLength="100" value={financialPurpose.county}/>
                </div>
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

export default EditCountyForm
