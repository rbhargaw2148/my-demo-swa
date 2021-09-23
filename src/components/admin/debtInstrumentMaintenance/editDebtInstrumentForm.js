import {Form, Modal} from 'react-bootstrap'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
const EditDebtInstrumentForm = (props) => {
    const {onModalClose} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Edit Debt Instrument</h3></Modal.Header>
            <Modal.Body>
                <div className="control">
                    <label><span className="required">* </span>Debt Group: </label>
                    <input value="Notes" disabled/>
                </div>
                <div className="control">
                    <label><span className="required">* </span>Code: </label>
                    <input maxLength="6" disabled/>
                </div>
                <div className="control">
                    <label><span className="required">* </span>Name: </label>
                    <input maxLength="100"/>
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

export default EditDebtInstrumentForm
