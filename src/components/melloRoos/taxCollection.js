import Card from '../ui/Card'
import {Form, Button} from 'react-bootstrap'
import {MDBTooltip} from'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
const TaxCollection = (props) => {
    const validateForm = () => {
        props.openWidget('delinquentReporting');
    }

    return (
        <Card>
            <div className="form">
                <h4>Tax Collection</h4>
                <div>
                    <label>Total Amount of Special Taxes Due Annually</label>
                    <Form.Control type="text" defaultValue="0.00"/>
                </div>
                <div>
                    <label>Total Amount of Unpaid Special Taxes Annually</label>
                    <Form.Control type="text" defaultValue="0.00"/>
                </div>
                <div>
                    <label><span className="required" > * </span>Does this agency participate in the County's Teeter Plan? <MDBTooltip domElement tag="span" placement="right">
                        <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                        <span>Note if the district is covered under its county's Teeter Plan.</span>
                    </MDBTooltip></label>
                    <div style={{display: 'flex'}}>
                        <Form.Check type="radio" name="appraisalValue" value="qualizedTaxRoll" label="Yes"/>
                        <Form.Check type="radio" name="appraisalValue" value="appraisalOfProperty" label="No" />
                    </div>
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>

            </div>
        </Card>
    )
}

export default TaxCollection
