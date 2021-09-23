import Card from '../ui/Card'
import {Form, Button} from 'react-bootstrap'
const FundBalance = (props) => {
    const validateForm = () => {
        props.openWidget('assessedValue');
    }

    return (
        <Card>
            <div className="form">
                <h4>
                    Fund Balance
                </h4>
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
                    <label> Construction Fund(s)</label>
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
