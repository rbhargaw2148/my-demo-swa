import { Form, Button } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import Card from '../ui/Card'


const DeptPolicy = () => {
    const history = useHistory();
    const validateForm = (e) => {
        history.push("/type-of-debt")
    }
    return (
        <Card>
            <div className="form">
                <label style={{fontSize: '16px', marginBottom: '0.5rem'}}>Issuer certifies that it has complied with GC section 8855(i) with respect to local debt policies:</label>
                <br />
                <Form.Check
                        inline
                        label="No"
                        name="debt_policy"
                        type="radio"
                        id="inline-radio-1"
                    />
                <Form.Check
                        inline
                        label="Yes"
                        name="debt_policy"
                        type="radio"
                        id="inline-radio-2"
                    />
                <Form.Check
                        inline
                        label="N/A"
                        name="debt_policy"
                        type="radio"
                        id="inline-radio-2"
                    />
                <div className="btn-div">
                    <Button className="button">Back</Button>
                    <Button className="fright button" type="button" onMouseDown={(e)=>validateForm(e)}>Next</Button>
                </div>    
            </div>
                     
        </Card>
    )
}

export default DeptPolicy
