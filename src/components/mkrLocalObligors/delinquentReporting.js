import Card from '../ui/Card'
import {useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {AiFillQuestionCircle} from 'react-icons/ai'

const DelinquentReporting = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    const validateForm = () => {
        props.openWidget('retiredIssues');
    }

    return (
        <Card>
            <div className="form">
                <h3>Delinquent Reporting <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

                {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                        Indicate the delinquency rate for taxes and assessments supporting the local obligations. This should be reported as the percentage of the total applicable tax increment, special tax, or benefit assessment installment due for the year. Indicate the tax collection date, if the district participates in the county’s Teeter Plan, the amount of taxes due and the amount of taxes unpaid.
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }</h3>

                <div>
                    <label><span className="required">*</span>Have Delinquent Taxes been reported</label>
                    <div style={{display: 'flex'}}>
                        <Form.Check type="radio" name="delinquentTax" value="yes" label="Yes" />
                        <Form.Check type="radio" name="delinquentTax" value="no" label="No" />
                    </div>
                </div>

                <div>
                    <label><span className="required">*</span>Delinquent Parcel Information Reported as of Equalized Tax Roll of</label>
                    <Form.Control type="date" placeholder="MM/DD/YYYY"/>
                </div>
                <div>
                    <label><span className="required">*</span>Delinquent Rate</label>
                    <Form.Control type="text" placeholder="XX.XXXXX"/>
                </div>
                <div>
                    <label>Does this agency participate in the County's Teeter's Plan?</label>
                    <div style={{display: 'flex'}}>
                        <Form.Check type="radio" name="teeterPlan" value="yes" label="Yes" />
                        <Form.Check type="radio" name="teeterPlan" value="no" label="No" />
                    </div>
                </div>
                <div>
                    <label>Taxes Due <em style={{color: 'green'}}>(1.00 THRU 99,999,999,999.99)</em></label>
                    <Form.Control type="text" defaultValue="0.00"/>
                </div>
                <div>
                    <label>Taxes Unpaid <em style={{color: 'green'}}>(1.00 THRU 99,999,999,999.99)</em></label>
                    <Form.Control type="text" defaultValue="0.00"/>
                </div>
                

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>

            </div>
        </Card>
    )
}

export default DelinquentReporting
