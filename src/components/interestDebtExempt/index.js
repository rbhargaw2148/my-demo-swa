import {useState} from 'react'
import { Form, Button,Col, Row } from 'react-bootstrap'
import Card from '../../components/ui/Card'
import { useHistory } from 'react-router-dom'

const InterestDeptExempt = (props) => {
    const [showIsPreferenceItem, setShowIsPreferenceItem] = useState(false);
    const [showPrincipalAmount, setShowPrincipalAmount] = useState(false);
    const history = useHistory();
    const validateForm = (e) => {
        props.openWidget('typeOfSale');
        //history.push("/dashboard/report-proposed-sale/type-of-sale")
    }

    const handleUnderFedaralLawChange = (e) => {
        if( e.target.value === 'no' ) {
            setShowIsPreferenceItem(true);
            setShowPrincipalAmount(false);
        } else {
            setShowIsPreferenceItem(false);
            setShowPrincipalAmount(true)
        }

    }
    return (
        <Card>
        <Form className="form">
            <h1>Is The Interest on The Debt Taxable?</h1>
            
            <Row>
                <Col md={2}>
                <label>Under State Law:</label>
                </Col>
                <Col md={9}>
                <Form.Check
                    inline
                    label="YES (taxable)"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                />
                <Form.Check
                    inline
                    label="NO (tax-exempt)"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                />
                </Col>
            </Row>
            <Row>
            <Col md={2}> <label>	Under Federal Law:</label></Col>
            <Col md={9}> <Form.Check
                    inline
                    label="YES (taxable)"
                    name="underFedaralLaw"
                    type="radio"
                    id="inline-radio-1"
                    value="yes"
                    onChange={(e)=>handleUnderFedaralLawChange(e)}
                />
                <Form.Check
                    inline
                    label="NO (tax-exempt)"
                    name="underFedaralLaw"
                    type="radio"
                    id="inline-radio-2"
                    value="no"
                    onChange={(e)=>handleUnderFedaralLawChange(e)}
                /></Col>
            </Row>
            {showPrincipalAmount && <Row><Col md={6}>
                <label>Federal Tax Principal Amount:</label>
                <Form.Control type="text"/>
                </Col>
            </Row>}
            {showIsPreferenceItem && <><Row>
                <label>If the issue is federally tax-exempt, is interest a specific
                    preference item for the purpose of alternative minimum tax?</label>
                <div style={{display: 'inline-flex'}}>
                <Form.Check
                    label="Yes, preference item"
                    name="preferenceItem"
                    type="radio"
                    id="inline-preference-1"
                />
                <Form.Check
                    
                    label="No, not a preference item"
                    name="preferenceItem"
                    type="radio"
                    id="inline-preference-2"
                />
                </div>
            </Row>
            </>
            }
            <div className="btn-div">
            <Button>Back</Button>
            <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
            </div>
        </Form> 
        </Card>
    )
}

export default InterestDeptExempt
