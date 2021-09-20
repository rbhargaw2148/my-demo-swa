import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classes from '../formElements/Input.module.css'
import Card from '../ui/Card'
import { useHistory } from 'react-router-dom'
// import { connect } from "react-redux"
// import { bindActionCreators } from "redux"
// import * as Actions from './actions'
import { Form, Col , Row, Button} from "react-bootstrap"
import {FormInput} from '../formElements/FormInput'
import MaskedInput from 'react-text-mask'
import { runValidations } from '../../utils/index'

const FilingContact = (props) => {
    const history = useHistory();
    // const issuerContact = useSelector((state)=>state.issuerContact);
    // const displatch = useDispatch();
    // const { saveIssuerContact } = bindActionCreators(Actions, displatch);
    const [filingContactInfo, setFilingContactInfo] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        agency: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        addressLine4: "",
        city: "",
        state: "",
        zipCode: "",
        areaCode: "",
        phoneNumber: "",
        phoneExt: "",
        sendAcknowledgementTo: "",
        akknowledgementEmail: "",
    });
    const [filingContactErrors, setfilingContactErrors] = useState({});

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setFilingContactInfo({
            ...filingContactInfo,
            [e.target.name]: value
        });
    }
    const validateField = (e) => {
        const validationRes = runValidations(e);
        setfilingContactErrors({
            ...filingContactErrors, [e.target.name]: validationRes
          })
    }
    const inputProps = {
        onChange: (e) => onHandleChange(e),
        onBlur: (e)=> validateField(e)
    }
    
    const validateForm = (e) => {
        props.openWidget('financingParticipants');
       // history.push("/dashboard/report-proposed-sale/financing-participants")
    }


    return (
        <Card>
        <Form className="form">
            <h1>Filing Contact</h1>
            
            {/* <div className="mb-3">
                <label>Name of Individual representing:</label>
                <div>
                <Form.Check
                    inline
                    label="Bond Counsel"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                />
                <Form.Check
                    inline
                    label="Borrower Counsel (Loan) (Not Obligor Counsel)"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                />
                <Form.Check
                    inline
                    label="Issuer"
                    name="group1"
                    type="radio"
                    id="inline-radio-3"
                />
                <Form.Check
                    inline
                    label="Financial Advisor"
                    name="group1"
                    type="radio"
                    id="inline-radio-4"
                />
                <Form.Check
                    inline
                    label="Lender"
                    name="group1"
                    type="radio"
                    id="inline-radio-5"
                />
                <Form.Check
                    inline
                    label="Lead Underwriter"
                    name="group1"
                    type="radio"
                    id="inline-radio-6"
                />
                </div>
            </div> */}
            <div>
                <label>Who completed this form and may be contacted for information:</label>
            
                <Row>
                    <Col md={4} className={classes.control}>
                        <FormInput 
                            label="First Name" 
                            type="text" 
                            name="firstName" 
                            error={filingContactErrors.firstName}
                            validations={["required", "maxLength:40"]} 
                            disabled
                            {...inputProps}
                        />
                    </Col>
                    <Col md={4} className={classes.control}>
                        <FormInput 
                            label="Middle Name" 
                            type="text" 
                            name="middleName" 
                            error={filingContactErrors.middleName}
                            validations={["maxLength:40"]} 
                            disabled
                            {...inputProps}
                        />
                    </Col>
                    <Col md={4} className={classes.control}>
                        <FormInput 
                            label="Last Name" 
                            type="text" 
                            name="lastName" 
                            error={filingContactErrors.lastName}
                            validations={["required", "maxLength:40"]} 
                            disabled
                            {...inputProps}
                        />
                    </Col>
                </Row>
                <div className={classes.control}>
                    <label>E-Mail:</label>
                    <input type="email" disabled/>
                </div>
                <div className={classes.control}>
                    <label>Firm/ Agency:</label>
                    <input type="text" disabled/>
                </div>
                <Row>
                    <Col md={6} className={classes.control}>
                        <label>Address Line1:</label>
                        <input type="text" disabled/>
                    </Col>
                    <Col md={6} className={classes.control}>
                        <label>Address Line2:</label>
                        <input type="text" disabled/>
                    </Col>
                    <Col md={6} className={classes.control}>
                        <label>Address Line3:</label>
                        <input type="text" disabled/>
                    </Col>
                    <Col md={6} className={classes.control}>
                        <label>Address Line4:</label>
                        <input type="text" disabled/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className={classes.control}>
                        <label>City:</label>
                        <input type="text" disabled/>
                    </Col>
                    <Col md={4} className={classes.control}>
                        <label>State</label>
                        <input type="text" disabled/>
                    </Col>
                    <Col md={4} className={classes.control}>
                        <label>Zip Code:</label>
                        <input type="text" disabled/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}><FormInput label="Area Code" {...inputProps} disabled/></Col>
                    {/* <Col md={4}><FormInput label="Phone Number (XXX-XXXX)" {...inputProps}/></Col> */}
                    <Col md={4}>
                        <div className={classes.control}>
                        <label>Phone Number (XXX-XXXX)</label>
                        <MaskedInput mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
                            guide={false}
                            {...inputProps}
                            name="phoneNumber"
                            data-validations={["required", "length:8"]}
                            disabled
                        />
                        {filingContactErrors.phoneNumber && <p className="error">{filingContactErrors.phoneNumber}</p>}
                        </div>
                    </Col>
                    <Col md={4}><FormInput label="Ext" disabled/></Col>
                </Row>
                {/* <div className={classes.control}>
                    <label>Send acknowledgement to:</label>
                    <input type="text"/>
                </div> */}
                <div className={classes.control}>
                    <label>Ackowledgement E-Mail:</label>
                    <input type="email" disabled/>
                </div>
            </div>
            
            <div className="btn-div">
            <Button>Back</Button>
            <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
            </div>
        </Form> 
        {/* <button onClick={()=>saveIssuerContact(issuerContact)}>Back</button>
        <button><Link to='/financing-participants'>Continue</Link></button> */}
        </Card>
    )
}
  
export default FilingContact;