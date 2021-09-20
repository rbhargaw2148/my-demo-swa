import {useState} from 'react'
import { Form, Row, Col, Modal , Button} from 'react-bootstrap'
import Card from '../ui/Card'
import {AiFillQuestionCircle} from 'react-icons/ai'
import { MDBTooltip } from 'mdbreact'
const RevenuewBondsReason = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);
    const [showOtherTextField, setShowOtherTextField] = useState(false);
    const handleClick = (e) => {
        const {value, checked} = e.target;
        if(value === 'OTH' && checked) {
            setShowOtherTextField(true);
        } else {
            setShowOtherTextField(false);
        }
    }

    const validateForm = (e) => {
        props.openWidget('contactInformation');
    }
    return (
        <Card>
            <div className="form">
                <h1>Reason for Negotiated Refunding {"  "}
                <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon" />
                {showInstructionsModal && 
                <Modal show="true" backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <span>If a local agency issuer sold enterprise revenue bonds at private
                                (negotiated) sale, Government Code 54418 requires that the local
                                agency, within 2 weeks of the sale, submit a written statement to
                                the Commission stating the reason(s) why it did not sell the debt
                                issue at a competitive sale. The most common reasons cited for
                                offering the debt issue at negotiated rather than public sale are
                                listed. If the reason is not listed, select Other and specify the
                                reason. If the written statement was received prior to submission of
                                the Report of Final Sale, the reason submitted will be prepopulated.
                            </span>                                    
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }
                </h1>

                <div className="mb-3">If the issue is a private sale of revenue bonds, indicate the reason(s) why the bonds were issued at a private or
                negotiated versus a competitive sale.</div>
                <div>
                    <Form.Check 
                        type="checkbox"
                        label="Timing of the sale provided more flexibility than a public sale."/>
                </div>
                <div>
                    <Form.Check 
                        type="checkbox"
                        label="More cost saving were expected to be realized than a public sale"/>
                </div>
                <div>
                    <Form.Check 
                        type="checkbox"
                        label="More flexibility in debt structure was available than a public sale"/>
                </div>
                
                <div>
                    <Form.Check 
                        type="checkbox"
                        label="Issuer able to work with participants familiar with issue/r than a public sale"/>
                </div>
                <div>
                    <Form.Check 
                        type="checkbox"
                        label="All of the above"/>
                </div>
                <div>
                    <Form.Check 
                        type="checkbox"
                        label="Other"
                        value="OTH"
                        onClick={(e)=>handleClick(e)}/>
                </div>
                { showOtherTextField && 
                <div>
                    <Form.Control type="text" />
                    </div>}
                

                <div className="btn-div">
                <Button>Back</Button>
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>
        </Card>
    )
}

export default RevenuewBondsReason
