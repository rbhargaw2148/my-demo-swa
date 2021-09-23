import {useState} from 'react'
import Card from '../ui/Card'
import {Row, Col, Form, Button} from 'react-bootstrap'
const Issuance = (props) => {
    const [showAmountField, setShowAmountField] = useState(false);

    const handleReserveFundChange = (e) => {
        const {value} = e.target;
        if(value === 'yes') {
            setShowAmountField(true);
        } else {
            setShowAmountField(false);
        }
    }
    const validateForm = () => {
        props.openWidget('fundBalance');
    }

    return (
        <Card>
            <div className="form">
                <h1>Issuance</h1>
            <Row>
            <Col>
                <label>Issuer</label>
                <Form.Control type="text" value="ABAG Finance Authority for Nonprofit Corporations CFD No 2004-2" disabled/>
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
                    <Form.Control type="text" />
                    </Col>
                </Row>
            }

            <Row>
                <Col md={4}>
                <label>Date of Report</label>
                <Form.Control type="text" value="01/03/2017" disabled/>
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
