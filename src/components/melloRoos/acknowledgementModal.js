import {useState} from 'react'
import {Form, Modal, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const AcknowledgementModal = ({onModalClose, cdiacNo}) => {
    const history = useHistory();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const handleChange = (e) => {
       if(e.target.checked) {
        setBtnDisabled(false);
       } else {
        setBtnDisabled(true);
       }
    }

    const handleSubmit = () => {
        onModalClose();
        history.push('/mello-roos-yfs/'+cdiacNo);

    }

    return (
        <Modal show={true} onHide={onModalClose} backdrop="static" keyboard={false}  size="lg">
            <Modal.Header closeButton>
            <Modal.Title>MELLO ROOS YEARLY FISCAL STATUS REPORT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="mb-10" >
               <p>Completion and submittal of this form to the California Debt and Investment Advisory Commission will assure your compliance with California State law.</p>
               <p>Section 53359.5 of the California Government Code requires that all agencies issuing Mello-Roos Community Facilities bonds after January 1, 1993 to report specific information to the Commission by October 30th of each year.</p> 
               </div>

               <div>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" id="acknowledge" label="I Acknowledge" onChange={e=>handleChange(e)}/>
                </Form.Group>
               </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={onModalClose}>
                Close
            </Button>
            <Button variant="primary" disabled={btnDisabled} onClick={handleSubmit}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AcknowledgementModal
