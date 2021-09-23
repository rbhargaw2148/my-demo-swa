import {useState} from 'react'
import Card from '../ui/Card'
import {Row, Col, Form, Button} from 'react-bootstrap'
const Issuance = (props) => {
    const [showAmountField, setShowAmountField] = useState(false);
    const [showPercentField, setShowPercentField] = useState(false);

    const handleReserveFundChange = (e) => {
        const {value} = e.target;
        if(value === 'yes') {
            setShowAmountField(true);
        } else {
            setShowAmountField(false);
        }
    }
    const handleAuthReserveFundChange = (e) => {
        const {value} = e.target;
        if(value === 'yes') {
            setShowPercentField(true);
        } else {
            setShowPercentField(false);
        }
    }
    const validateForm = () => {
        props.openWidget('fundBalance');
    }

    return (
        <Card>
            <div className="form">
                <h3>Issuance</h3>
            <Row>
            <Col>
                <label>Issuer</label>
                <Form.Control type="text" value="Sonoma County" disabled/>
            </Col>
            </Row>
            <Row>
            <Col>
                <label>Project Name</label>
                <Form.Control type="text" value="Windemere Ranch Series A" disabled/>
            </Col>
            </Row>
            <Row>
            <Col>
                <label>Name/Title/Series of Bond Issue</label>
                <Form.Control type="text" value="2007 Special Tax Ref Bonds" disabled/>
            </Col>
            </Row>
           <div className="control">
                <label>Date of Bond Issue</label>
                <Form.Control type="text" value="05/13/2017" disabled/>
            </div>
            <div>
                <label>Original Principal Amount of Bonds</label>
                <Form.Control type="text" value="34,923" disabled/>
            </div>
            <div>
                <label><span className="required" > * </span>Reserve Fund Minimum Balance</label>
                <div style={{display: 'flex'}}>
                    <Form.Check type="radio" name="reserveFund" value="yes" label="Yes" onChange={(e)=>handleReserveFundChange(e)}/>
                    <Form.Check type="radio" name="reserveFund" value="no" label="No" onChange={(e)=>handleReserveFundChange(e)}/>
                </div>
            </div>
            {showAmountField && <Row>
                    <Col md={4}>
                    <label><span className="required">* </span>Amount</label>
                    <Form.Control type="text" defaultValue="0.00"/>
                    </Col>
                </Row>
            }
            <div>
                <label><span className="required" > * </span>Part of Authority Reserve Fund</label>
                <div style={{display: 'flex'}}>
                    <Form.Check type="radio" name="reserveFund" value="yes" label="Yes" onChange={(e)=>handleAuthReserveFundChange(e)}/>
                    <Form.Check type="radio" name="reserveFund" value="no" label="No" onChange={(e)=>handleAuthReserveFundChange(e)}/>
                </div>
            </div>
            {showPercentField && <Row>
                    <Col md={4}>
                    <label><span className="required">* </span>Percent of Reserve Fund</label>
                    <Form.Control type="text" defaultValue="0.00"/>
                    </Col>
                </Row>
            }

            <div className="control">
                <label>Name of Authority that purchased debt</label>
                <Form.Control type="text" value="Sonoma County Public Financing Authority" disabled/>
            </div>

            <div className="control">
                <label>Date of Authority Bond Issuance</label>
                <Form.Control type="text" value="05/13/2017" disabled/>
            </div>
            <Row>
                <Col md={4}>
                <label>Date of Filing</label>
                <Form.Control type="text" defaultValue="09/22/2021" disabled/>
                </Col>
            </Row>

            <div className="btn-div">
            <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
            </div>
            </div>
        </Card>
    )
}

export default Issuance
