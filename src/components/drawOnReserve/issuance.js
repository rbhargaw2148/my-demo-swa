import Card from '../ui/Card'
import {Row, Col, Form, Button} from 'react-bootstrap'
const Issuance = (props) => {
    const validateForm = () => {
        props.openWidget('draw');
    }
    return (
        <Card>
            <div className="form">
                <h1>Issuance</h1>
            <div>
                <label>CDIAC Number</label>
                <Form.Control type="text" value="2019-0001" disabled/>
            </div>
            <Row>
            <Col>
                <label>Issuer</label>
                <Form.Control type="text" value="ABAG Finance Authority for Nonprofit Corporations CFD No 2004-2" disabled/>
            </Col>
            <Col>
                <label>Issue Name</label>
                <Form.Control type="text" disabled/>
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
                <label>Actual Sale Date</label>
                <Form.Control type="text" value="06/05/2017" disabled/>
            </Col>
            <Col>
                <label>Date of Filing</label>
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
