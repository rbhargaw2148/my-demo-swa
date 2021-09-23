import {useState} from 'react'
import Card from '../ui/Card'
import {Form, Button, Modal} from 'react-bootstrap'
import {AiFillQuestionCircle} from 'react-icons/ai'

const AssessesValue = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    const validateForm = () => {
        props.openWidget('taxCollection');
    }

    return (
        <Card>
            <div className="form">
                <h4>Assessed Value  <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

                {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <ul>
                                <li>Issuers should report the total assessed value of parcels (land and improvements), which are subject to or may be subject to the special tax, shown on the most recent tax roll at the county assessor’s office. </li>
                                <li>Include the date of the tax roll used on the report.</li>
                                <li>Indicate either the Equalized Tax Roll or Appraisal of Property.</li>
                                <li>The appraisal value of the property should only be used in the first year of the bond issue or before annual tax billing commences.</li>
                                 <li>For issuers selling prior to June 30th of the year or those issuers that have 12 months of capitalized interest available and for which no annual tax roll billing will be required, the most recent appraisal value of the property may be reported as the assessed value.</li>
                                 </ul>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }</h4>      
                <div>
                    <label>Assessed or Appraised Value Reported as of,</label>
                    <div style={{display: 'flex'}}><Form.Control type="date" /></div>
                </div>
                <div>
                    <label><span className="required" > * </span>Use Appraised Value only in first year or before anuual tax roll billing commences</label>
                <div style={{display: 'flex'}}>
                    <Form.Check type="radio" name="appraisalValue" value="qualizedTaxRoll" label="From Equalized Tax Roll"/>
                    <Form.Check type="radio" name="appraisalValue" value="appraisalOfProperty" label="From Appraisal of Property" />
                </div>
                </div>
                <div>
                    <label>Total Assessed Value of All Parcels</label>
                    <Form.Control type="text" defaultValue="0.00"/>
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>

            </div>
        </Card>
    )
}

export default AssessesValue
