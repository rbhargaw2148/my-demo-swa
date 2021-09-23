import {useState} from 'react'
import { Form, Button, Modal, Row, Col } from 'react-bootstrap'
import Select from 'react-select'
import Card from '../ui/Card'
import {AiFillQuestionCircle} from 'react-icons/ai'

const RetiredIssues = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);
    const [showMaturedFields, setShowMaturedFields] = useState(false);
    const [showRedeemedFields, setShowRedeemedFields] = useState(false);
    const [showOtherFields, setShowOtherFields] = useState(false);
    const RetiredIssuesOptions = [
        {value: 'NR', label: 'Not Retired'},
        {value: 'M', label: 'Matured'},
        {value: 'RE', label: 'Redeemed Entirely'},
        {value: 'O', label: 'Other'},
    ]

    const handleChange = (e) => {
        switch (e.value) {
            case "M":
                setShowMaturedFields(true);
                setShowRedeemedFields(false);
                setShowOtherFields(false);
                break;
            case "RE":
                setShowMaturedFields(false);
                setShowRedeemedFields(true);
                setShowOtherFields(false);
                break;
            case "O":
                setShowRedeemedFields(false);
                setShowMaturedFields(false);
                setShowOtherFields(true);
                break;
            default:
                setShowMaturedFields(false);
                setShowRedeemedFields(false);
                setShowOtherFields(false);
                break;
        }
    }

    const validateForm = () => {
        props.openWidget('filingContact')
    }
    return (
        <Card>
            <div className="form">
                <h3>Retired Issues  <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

                {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <span>{props.instructions}</span>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }</h3>

                <div>
                    <label><span className="required">*</span>Indicate Reason for Retirement</label>
                    <Select options={RetiredIssuesOptions} onChange={(e)=>handleChange(e)}/>
                </div>

                {showMaturedFields && <div>
                    <label><span className="required">*</span>Final Maturity Date</label>
                    <Form.Control type="date" />
                </div>
                }

                {showRedeemedFields && <>
                <Row>
                <Col>
                    <label><span className="required">*</span>CDIAC #</label>
                    <Form.Control type="text" />
                </Col>
                <Col>
                    <label> State refunding bond title</label>
                    <Form.Control type="text" />
                </Col>
                </Row>
                <div>
                    <label><span className="required">*</span>Redemption Date</label>
                    <Form.Control type="date" />
                </div></>
                }

                {showOtherFields && <><div>
                    <label><span className="required">*</span>Other</label>
                    <Form.Control type="text" />
                </div>
                <div>
                    <label><span className="required">*</span>Date</label>
                    <Form.Control type="date" />
                </div></>
                }

            <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>
        </Card>
    )
}

export default RetiredIssues
