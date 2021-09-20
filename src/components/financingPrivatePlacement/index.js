import { Form , Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import Card from '../ui/Card'

const FinancingPrivatePlacement = (props) => {
    const history = useHistory();
    const validateForm = (e) => {
        props.openWidget('typeOfSale');
        //history.push("/dashboard/report-proposed-sale/debt-policy")
    }
    return (
        <Card>
            <div className="form">
                <label style={{fontSize: '16px', marginBottom: '0.5rem'}}>Is this Financing a Private Placement?</label>
                <br />
                <Form.Check
                        inline
                        label="No"
                        name="private_placement"
                        type="radio"
                        id="inline-radio-1"
                    />
                <Form.Check
                        inline
                        label="Yes"
                        name="private_placement"
                        type="radio"
                        id="inline-radio-2"
                    />
                <div className="btn-div">
                    <Button className="button">Back</Button>
                <Button className="fright button" type="button" onMouseDown={(e)=>validateForm(e)}>Next</Button>
                {/* <Button className="fright" type="button" onClick={()=>saveIssuer({issuerName: "aaa"})}>Continue</Button> */}
                </div>
            
            </div>
            
        </Card>
    )
}

export default FinancingPrivatePlacement
