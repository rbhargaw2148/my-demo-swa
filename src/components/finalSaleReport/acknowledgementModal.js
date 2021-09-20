import {useState} from 'react'
import {Form, Modal, Button} from 'react-bootstrap'
import classes from './reportProposedSale.module.css'
import { useHistory } from 'react-router-dom'

const AcknowledgementModal = ({onModalClose}) => {
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
        history.push('/dashboard/report-final-sale');

    }

    return (
        <Modal show={true} onHide={onModalClose} backdrop="static" keyboard={false}  size="lg">
            <Modal.Header closeButton>
            <Modal.Title>REPORT OF FINAL SALE</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modalbody}>
                <div className={classes.address}>
					<h2>California Debt and Investment Advisory Commission</h2>
					<h2>915 Capitol Mall, Room 400, Sacramento, CA 95814</h2>
					<h2>P.O. Box 942809, Sacramento, CA 94209-0001</h2>
					<h2>Tel.: (916) 653-3269 Fax: (916) 654-7440</h2>
				</div>

               <div className="mb-10" >
               Completion and timely submittal of this form to the California Debt and Investment Advisory Commission (CDIAC) at the above address will assure your compliance with existing California State law and will assist in the maintenance of a complete database of public debt in California. Thank you for your cooperation1.
               </div>
               <div>
                    <ol>
                    <li>Section 53583(c)(2)(B) of the California Government Code requires that any local agency selling refinancing bonds at private sale
                        or on a negotiated basis shall notify, within two (2) weeks after the bonds are sold, to CDIAC explaining the reasons 
                        why the local agency determined to sell the bonds at a private sale or on a negotiated basis instead of at public sale.</li>
                    <li>Section 54418 of the California Government Code requires that any local agency selling revenue bonds at a private sale rather
                        than a public sale shall notify CDIAC no later than two (2) weeks after the bonds are sold, explaining the reason for that decision.
                    </li>
                    <li>CDIAC issue Fee is authorized by the Section 8856 of the California Government Code and is charged to the lead underwriter, the purchaser or the lender
                        in an amount equal to one-fortieth of 1 percent of the principal amount of the issue, but not to exceed five thousand dollars ($5000) for any
                        one issue.
                    </li>
                    </ol>
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
