import {useState} from 'react'
import Card from '../ui/Card'
import {Form, Button, Modal} from 'react-bootstrap'
import {AiFillQuestionCircle} from 'react-icons/ai'

const FundBalance = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    const validateForm = () => {
        props.openWidget('delinquentReporting');
    }

    return (
        <Card>
            <div className="form">
                <h3>
                    Fund Balance <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>
                    {showInstructionsModal && 
                    <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                        {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                        <Modal.Body>
                            <div>
                                <span>The Principal Amount of Bonds/Loan Outstanding, the fund balances for the Bond Reserve Fund (if any) and the Capitalized Interest Fund (if any) must be reported. If an Administrative Fee was charged by Authority, please report the amount charged.</span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                        </Modal.Footer>
                    </Modal>
                    }
                </h3>
                <div>
                    <label>Principal Amount of Bonds Outstanding</label>
                    <Form.Control type="text" defaultValue="0.00" />
                </div>
                <div>
                    <label>Bond Reserve Fund</label>
                    <Form.Control type="text" defaultValue="0.00" />
                </div>
                <div>
                    <label>Capitalized Interest Fund</label>
                    <Form.Control type="text" defaultValue="0.00" />
                </div>
                <div>
                    <label>Administrative Fee Charged by Authority</label>
                    <Form.Control type="text" defaultValue="0.00" />
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>
        </Card>
    )
}

export default FundBalance
