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
        history.push('/dashboard/report-proposed-sale');

    }

    return (
        <Modal show={true} onHide={onModalClose} backdrop="static" keyboard={false}  size="lg">
            <Modal.Header closeButton>
            <Modal.Title>REPORT OF PROPOSED DEBT ISSUANCE</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modalbody}>
                {/* <div>
					<h2>California Debt and Investment Advisory Commission</h2>
					<h2>915 Capitol Mall, Room 400, Sacramento, CA 95814</h2>
					<h2>P.O. Box 942809, Sacramento, CA 94209-0001</h2>
					<h2>Tel.: (916) 653-3269 Fax: (916) 654-7440</h2>
				</div> */}

               <div className="mb-10" >
               Completion and timely submittal of this form to the California Debt and Investment Advisory Commission (CDIAC) at the above address will assure your compliance with existing California State law and will assist in the maintenance of a complete database of public debt in California. Thank you for your cooperation1.
               </div>
               <div>
                    <ol>
                    <li>Section 8855(i) of the California Government Code requires the issuer of any proposed new public debt issue to give written notice of the proposed sale to CDIAC no later than 30 days prior to the sale. Under California Government Code Section 8855(j), the issuer of any debt issue shall, not later than 21 days after the sale of the debt, submit a report of final sale and the official statement (or alternate financing documents) to the Commission. The Commission may require information to be submitted in the report that it considers appropriate.</li>
                    <li>Section 53583(c)(2)(B) of the California Government Code requires that any local agency selling refunding bonds at private sale or on a negotiated basis shall send a written statement, within two weeks after the bonds are sold, to CDIAC explaining the reasons why the local agency determined to sell the bonds at private sale or on a negotiated basis instead of at public sale.</li>
                    <li>Issuer certifies that it has complied with California Government Code section 8855(i) with respect to local debt policies.</li>
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
