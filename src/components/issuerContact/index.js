import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classes from '../formElements/Input.module.css'
import Card from '../ui/Card'
import { Link, useHistory } from 'react-router-dom'
// import { connect } from "react-redux"
// import { bindActionCreators } from "redux"
// import * as Actions from './actions'
import { Form, Row, Col, Button } from "react-bootstrap"
import { FormInput } from '../formElements/FormInput'
import MaskedInput from 'react-text-mask'
import { runValidations, validateFormFields } from '../../utils/index'


const IssuerContact = (props) => {
    const issuerContact = useSelector((state)=>state.issuerContact);
    const [issuerContactInfo, setIssuerContactInfo] = useState(issuerContact);

    //const displatch = useDispatch();
    //const { saveIssuerContact } = bindActionCreators(Actions, displatch);
    //const state = useSelector((state)=>state);
    const [issuerContactErrors, setIssuerContactErrors] = useState({});

    console.log("STATE: ", issuerContact);

    const history = useHistory();
    const validateForm = (e) => {
       // let formErrors = {};
        let form = e.target.closest('form#issuerContactForm');
        let formErrors = validateFormFields(form.elements);

        if(Object.keys(formErrors).length > 0) {
            setIssuerContactErrors(formErrors);
        } else {
            let proposedSaleData = JSON.parse(sessionStorage.getItem('ProposedSale'));
             proposedSaleData.issuerContact = issuerContactInfo;
            sessionStorage.setItem('ProposedSale', JSON.stringify(proposedSaleData));
            props.openWidget('filingContact');
            //history.push("/dashboard/report-proposed-sale/filing-contact")
        }

    }

    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setIssuerContactInfo({
            ...issuerContactInfo,
            [e.target.name]: value
        });
    }
    const validateField = (e) => {
        if ( e.target.dataset['validations'] )
            runValidations(e) 
        // const validationRes = runValidations(e);
        // setfilingContactErrors({
        //     ...filingContactErrors, [e.target.name]: validationRes
        //     })
    }

    const inputProps = {
        onChange: (e) => onHandleChange(e),
        onBlur: (e)=> validateField(e),
    }
    return (
        <Card>
        <form className="form" id="issuerContactForm">
            <h1>Issuer Contact</h1>
            <Row>
                <Col md={4} className={classes.control}>
                    <FormInput 
                        label="First Name" 
                        type="text" 
                        name="firstName" 
                        error={issuerContactErrors.firstName}
                        validations={["required", "maxLength:40"]} 
                        {...inputProps}
                    />
                </Col>
                <Col md={4} className={classes.control}>
                    <FormInput label="Middle Name" type="text" name="middleName" 
                    error={issuerContactErrors.middleName}
                    validations={["maxLength:40"]} {...inputProps}/>
                </Col>
                <Col md={4} className={classes.control}>
                    <FormInput label="Last Name" type="text" name="lastName" 
                    error={issuerContactErrors.lastName}
                    validations={["required", "maxLength:40"]} {...inputProps}/>
                </Col>
            </Row>
            <div className={classes.control}>
                <FormInput label="Email" type="email" name="email" 
                error={issuerContactErrors.email}
                validations={["required"]} {...inputProps}/>
            </div>
            <div className={classes.control}>
                <FormInput label="Title" type="text" name="title" 
                error={issuerContactErrors.title}
                validations={["required", "maxLength:40"]} {...inputProps}/>
            </div>
            <Row>
                <Col md={6} className={classes.control}>
                    <FormInput label="Address Line1" type="text" name="addressLine1" 
                    error={issuerContactErrors.addressLine1}
                    validations={["required"]} {...inputProps}/>
                </Col>
                <Col md={6} className={classes.control}>
                <FormInput label="Address Line2" type="text" name="addressLine2" 
                error={issuerContactErrors.addressLine2}
                {...inputProps}/>
                </Col>
                <Col md={6} className={classes.control}>
                    <FormInput label="Address Line3" type="text" name="addressLine3" 
                    error={issuerContactErrors.addressLine3}
                    {...inputProps}/>
                </Col>
                <Col md={6} className={classes.control}>
                    <FormInput label="Address Line4" type="text" name="addressLine4" 
                    error={issuerContactErrors.addressLine4}
                    {...inputProps}/>
                </Col>
            </Row>
            <Row>
                <Col md={3} className={classes.control}>
                <FormInput label="City" type="text" name="city"
                error={issuerContactErrors.city}
                 validations={["required"]} {...inputProps}/>
                </Col>
                <Col md={3} className={classes.control}>
                <FormInput label="State" type="text" name="state" 
                error={issuerContactErrors.state}
                validations={["required"]} {...inputProps}/>
                </Col>
                <Col md={3} className={classes.control}>
                <FormInput label="Zip Code" type="text" name="zipCode"
                error={issuerContactErrors.zipCode}
                 validations={["required"]} {...inputProps}/>
                </Col>
                <Col md={3} className={classes.control}>
                    <label>Issuer Located In:</label>
                    <Form.Select name="issuerLocatedIn" {...inputProps}>
                        <option>select</option>
                        
                        {/* {(Object.keys(locations).length !== 0) && locations.map((location, aidx) =>{
                            return (<option value={agency.agencyId}>{agency.agencyDisplayName}</option>);
                        }
                        ) } */}
                    </Form.Select>
                    
                </Col>
            </Row>
            <Row>
                <Col md={4}><FormInput label="Area Code" name="areaCode" {...inputProps}/></Col>
                <Col md={4}>
                    <div className={classes.control}>
                    <label>Phone Number (XXX-XXXX)</label>
                    <MaskedInput mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
                        guide={false}
                        {...inputProps}
                        name="phoneNumber"
                        data-validations={["required", "length:8"]}
                    />
                    {issuerContactErrors.phoneNumber && <p className="error">{issuerContactErrors.phoneNumber}</p>}
                    </div>
                </Col>
                <Col md={4}><FormInput label="Ext" name="phoneExt" {...inputProps}/></Col>
            </Row>
            <div className="btn-div">
            <Link to="/dashboard/report-proposed-sale/statutories"><Button>Back</Button></Link>
            <Button className="fright" type="button" onClick={(e)=>validateForm(e)}>Next</Button>
        </div>
        </form> 
        
        {/* <button onClick={()=>saveIssuerContact(issuerContact)}>Back</button>
        <button><Link to='/filing-contact'>Continue</Link></button> */}
        </Card>
    )
}
  
export default IssuerContact;