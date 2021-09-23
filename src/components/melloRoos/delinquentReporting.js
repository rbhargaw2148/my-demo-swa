import Card from '../ui/Card'
import {useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {AiFillQuestionCircle} from 'react-icons/ai'

const DelinquentReporting = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    const validateForm = () => {
        props.openWidget('docUpload');
    }

    return (
        <Card>
            <div className="form">
                <h4>Delinquent Reporting <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

                {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <ul>
                                <li>Report delinquencies as of the latest equalized tax roll within the Reporting Year if the issuing CFD has delinquent parcels.</li>
                                <li>Report the total number of delinquent parcels and the total dollar amount of delinquent taxes by reporting the number of parcels which are delinquent with respect to their special tax payments, the amount that each parcel is delinquent parcel number, and the length of time that each parcel has been delinquent per Government Code Section 53359.5 (b). </li>
                                <li>Submitters may redact a property owner’s confidential information before uploading the Delinquent Parcel Detail Report.</li>
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }</h4>
                <div>
                    <label>Delinquent Parcel Information Reported as of Equalized Tax Roll of</label>
                    <Form.Control type="text" placeholder="YYYY"/>
                </div>
                <div>
                    <label>Total Number of Delinquent Parcels</label>
                    <Form.Control type="text"/>
                </div>
                <div>
                    <label>Total Amount of Special Taxes Due on Delinquent Parcels</label>
                    <Form.Control type="text" placeholder="0.00"/>
                </div>
                

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>

            </div>
        </Card>
    )
}

export default DelinquentReporting
