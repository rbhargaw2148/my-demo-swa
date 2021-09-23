import {useState} from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import Select from 'react-select'
import Card from '../ui/Card'
import {AiFillQuestionCircle} from 'react-icons/ai'
import { MDBTooltip } from 'mdbreact'
const Draw = (props) => {
    const [amountFieldLabel, setAmountFieldLabel] = useState('Amount');
    const [showAmountField, setShowAmountField] = useState(false);
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);
    const drawOptions = [
        {value: 'F', label: 'Draw on Reserve'},
        {value: 'D', label: 'Default'},
        {value: 'R', label: 'Replenishment of Draw on Reserve(Voluntary Disclousure)'},
    ]

    const handleDrawTypeSelection = (e) => {
        if(e.value === 'F') {
            setAmountFieldLabel('Amount of Draw on Reserve');
        }else if(e.value === 'D') {
            setAmountFieldLabel('Amount not paid but due in the Default');
        } else if(e.value === 'R') {
            setAmountFieldLabel('Amount of Replenishment');
        }
        setShowAmountField(true);
    }

    const validateForm = () => {
        props.openWidget('filingContact');
    }
    return (
        <Card>
            <div className="form">
                <h1>Draw {"  "}<AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

            {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <ul style={{listStyleType: 'lower-alpha'}}>
                                <li> Draw on the Reserve Fund: Statute defines this as any withdrawal of funds from a reserve to pay principal and interest on the bonds issued by the authority or any bonds acquired by the authority.</li>

                                <li>Default: Statute defines this as non-payment or partial payment of principal and/or interest.</li>

                                <li>Replenishment of Draw on Reserve (Voluntary Disclosure) -  is defined as the replenishment of a previous draw on reserve.</li>
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }
                </h1>
                <div>
                    <div>
                        <label><span className="required">*</span>This form is submitted to the California Debt and Investment Advisory Commission in accordance with:  </label>
 	
                        <Form.Check type="radio" name="drawType" value="MLR" label="Section 53359.5(c) of the California Government Code Mello-Roos Community Facilities Districts Default or Draw on Reserve Reporting."/>
                        <Form.Check type="radio" name="drawType" value="MKR" label="Section 6599.1(c) of the California Government Code Marks-Roos Bond Pooling Act Participants Default or Draw on Reserve Reporting." />
                    </div>
                    <div>
                        <label><span className="required">*</span>Type of Draw: <MDBTooltip domElement tag="span" placement="right">
                            <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                            <span><div>
                            <ul style={{listStyleType: 'lower-alpha'}}>
                                <li> Draw on the Reserve Fund: Statute defines this as any withdrawal of funds from a reserve to pay principal and interest on the bonds issued by the authority or any bonds acquired by the authority.</li>

                                <li>Default: Statute defines this as non-payment or partial payment of principal and/or interest.</li>

                                <li>Replenishment of Draw on Reserve (Voluntary Disclosure) -  is defined as the replenishment of a previous draw on reserve.</li>
                            </ul>
                        </div></span>
                        </MDBTooltip>
                        </label>
                        <Select options={drawOptions} onChange={(e)=>handleDrawTypeSelection(e)}/>
                    </div>
                    <div>
                        <label><span className="required">*</span>Date Draw on Reserve/Default/Replenishment Occurred:
                        <MDBTooltip domElement tag="span" placement="right">
                            <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                            <span>The date the default, draw on the reserve fund, or replenishment occurred</span>
                        </MDBTooltip>
                        </label>
                        <Form.Control type="date" />
                    </div>
                    { showAmountField && <div>
                        <label><span className="required">*</span>{amountFieldLabel}: 
                        <MDBTooltip domElement tag="span" placement="right">
                            <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                            <span>The amount of the default, draw on the reserve fund, or replenishment</span>
                        </MDBTooltip>
                        </label>
                        <Form.Control type="text" />
                    </div>
                    }
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>

            </div>
        </Card>
    )
}

export default Draw
