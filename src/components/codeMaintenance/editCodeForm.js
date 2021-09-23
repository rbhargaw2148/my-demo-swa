import {Form, Modal} from 'react-bootstrap'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
const EditCodeForm = (props) => {
    const {onModalClose, codeInfo} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Edit Code</h3></Modal.Header>
            <Modal.Body>
                <div className="control">
                    <label><span className="required">* </span>Code: </label>
                    <input maxLength="6" value={codeInfo.code} disabled/>
                </div>
                <div className="control">
                    <label><span className="required">* </span>Description: </label>
                    <textarea maxLength="500" value={codeInfo.desc}/>
                </div>
                <div className="control">
                    <label>Brief Description: </label>
                    <textarea maxLength="100" value={codeInfo.briefDesc}/>
                </div>
                <div style={{display: 'flex'}}>
                    <Form.Check type="checkbox" label="Active?" checked={codeInfo.isActive === 'Yes' ? 'checked' : ''}/>
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

export default EditCodeForm
