import { Form, Button, Row, Col } from 'react-bootstrap'
//import {Link, useHistory} from 'react-router-dom'
import Card from '../ui/Card'
import Select from 'react-select'
import CurrencyInput from '../formElements/CurrencyInput'
import {useState} from 'react'

const TypeOfSale = (props) => {
    const [showAmountField, setShowAmountField] =useState(false);
    const socialImpactBonds = [
        {value: "G", label: "Green"},
        {value: "S", label: "Social Impact"},
        {value: "U", label: "Sustainability"},
        {value: "GS", label: "Green/Social Impact"},
        {value: "GU", label: "Green/Sustainability"},
        {value: "SU", label: "Social Impact/Sustainability"},
        {value: "A", label: "All"},
        {value: "N", label: "None"},
    ]

    const onSocialImpactBondChange = (e) => {
        if(e.value === 'N') {
            setShowAmountField(false)
        } else {
            setShowAmountField(true)
        }
    }
    //const history = useHistory();
    const validateForm = (e) => {
        props.openWidget('typeOfDebt');
        
        //history.push("/dashboard/report-proposed-sale/type-of-debt")
    }
    return (
        <Card>
            <div className="form">
                <div className="mb-10">
                    <label style={{marginBottom: '0.5rem'}}>Type of Sale</label>
                    <br />
                    <Form.Check
                            inline
                            label="Competitive"
                            name="typeOfSale"
                            type="radio"
                            id="inline-radio-1"
                        />
                    <Form.Check
                            inline
                            label="Negotiated"
                            name="typeOfSale"
                            type="radio"
                            id="inline-radio-2"
                        />
                </div>
                <div>
                    <label style={{marginBottom: '0.5rem'}}>Is this Financing a Private Placement?</label>
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
                </div>

                <div>
                    <label style={{marginBottom: '0.5rem'}}>Issuer certifies that it has complied with GC section 8855(i) with respect to local debt policies:</label>
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
                </div>
                <Row>
                    <Col md={8}>
                <div>
                    <label>Environmental / Social Impact Bonds</label>
                    <Select 
                    defaultValue={socialImpactBonds.filter(option => 
                        option.value === 'N')
                    }
                    
                        onChange={(e)=>onSocialImpactBondChange(e)}
                        options={socialImpactBonds}
                    />
                </div>
                </Col>
                {showAmountField && <Col md={4}>
                    <div className="control">
                        <label>Amount</label>
                        <CurrencyInput />
                    </div>
                </Col>}
                </Row>


                <div className="btn-div">
                    <Button className="button">Back</Button>
                    <Button className="fright button" type="button" onMouseDown={(e)=>validateForm(e)}>Next</Button>
                </div>
            </div>

        </Card>
    )
}

export default TypeOfSale
