import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classes from '../formElements/Input.module.css'
import Card from '../ui/Card'
import { Link, useHistory } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as Actions from './actions'
import { Form, Row, Col, Modal } from "react-bootstrap"
import { FormInput } from '../formElements/FormInput'
import CurrencyInput from '../formElements/CurrencyInput'
import { runValidations, validateFormFields } from '../../utils/index'
import {AiFillQuestionCircle} from 'react-icons/ai'
import { MDBTooltip } from 'mdbreact'

const Issuer = (props) => {
    const issuer = useSelector((state)=>state.issuer);
    const [issuerInfo, setIssuerInfo] = useState(issuer);
    const [formErrors, setFormErrors] = useState({})
    const [issuerValidated, setIssuerValidated] = useState(false);
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    const history = useHistory();

    const user = JSON.parse(sessionStorage.getItem('user'));
   // console.log(issuer);
    const dispatch = useDispatch();

    const { saveIssuer } = bindActionCreators(Actions, dispatch);
    //console.log(AC);
    const handleChange = (e) => {  
        const {name, value} = e.target;
        setIssuerInfo({
            ...issuerInfo,
            [e.target.name]: value
        });
       // console.log("Issuer Info: ", issuerInfo);
    }

    // NOT NEEDED 
    // const handleAmountChange = (e) => {     
    //     const {name, value} = e.target;
    //     const re = /^[0-9\b]+$/;
    //     if (value === '' || re.test(value)) {
    //         setIssuerInfo({
    //             ...issuerInfo,
    //             [e.target.name]: value
    //         });
    //     }
    // }

    // const basicValidation = (validator, value) =>{
    //     const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     //const minRe = /min:[0-9]+$/;
    //     //const maxRe = /max:[0-9]+$/;
    //     const zipRe = /\d{5}-?(\d{4})?/;
    //     switch (validator) {
    //       case "required":
    //         return value.length > 0 ? "" : "This value is required";
    //       case "email":
    //         return emailRe.test(value) ? "" : "Please enter a valid email";
    //       case "zipCode":
    //         return zipRe.test(value) ? "" : "Please enter a valid zipcode";
    //       case validator.match(/^minLength:/)?.input:
    //         const min = validator.split(":")[1];
    //         return value.length >= min
    //           ? ""
    //           : `This value needs to be at least ${min} characters`;
    //       //case maxRe.test(validator):
    //       case validator.match(/^maxLength:/)?.input:
    //         const maxlength = validator.split(":")[1];
    //         return value.length <= maxlength
    //           ? ""
    //           : `This value cannot be more than ${maxlength} characters`;
    //     //   case validator.match(/^max:/)?.input:
    //     //     const max = validator.split(":")[1];
    //     //     const maxRange = max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    //     //     return value*1 <= max*1
    //     //         ? ""
    //     //         : `This value cannot be more than ${maxRange}`;
    //       default:
    //         return "";
    //     }
    // }

    // const runValidations = e => {
    //      const value = e.target.value;
    //      const name = e.target.name;
    //      const validations = e.target.dataset['validations'] ? e.target.dataset['validations'].split(',') : [];
    //      let validationRes;
    //      for (let i = 0; i < validations.length; i++) {
    //        const validator = validations[i];
    //        if (typeof validator === "string")
    //          validationRes = basicValidation(validator, value);
    //        if (validationRes) break;
    //      }
    //      let errorMessage = validationRes || null
    //     setFormErrors({
    //       ...formErrors, [name]: errorMessage
    //     });
    //   }

    const validateField = (e) => {
        //console.log('on Blur');
        if ( e.target.dataset['validations'] )
            runValidations(e) 
    }

    const validateForm = (e) => {
        //let formErrors = {};
        let form = e.target.closest('form#issuerForm');

        let formErrors = validateFormFields(form.elements);

        // Array.prototype.forEach.call(form.elements, (element) => {
        //     const validations = element.dataset['validations'] ? element.dataset['validations'].split(',') : null;
        //     let validationRes;
        //     if( validations ) {
        //         for (let i = 0; i < validations.length; i++) {
        //         const validator = validations[i];
        //         if (typeof validator === "string")
        //             validationRes = basicValidation(validator, element.value);
        //         if (validationRes) break;
        //         }
        //         if(validationRes) {
        //             formErrors[element.name] = validationRes
        //         }
        //     }
        // })
        if(Object.keys(formErrors).length > 0) {
            setFormErrors(formErrors);
        } else {
            //saveIssuer({...issuerInfo});
            setFormErrors({});
            const proposedSale={};
            proposedSale.issuer = issuerInfo;
            sessionStorage.setItem('ProposedSale', JSON.stringify(proposedSale));
            props.openWidget('issuanceAuthorization')
            //history.push("/dashboard/report-proposed-sale/issuance-authorization")
        }
    }

    return (
        <Card>
        <Form className="form" id="issuerForm">
            <h1>Issuer {"  "}<AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

            {showInstructionsModal && 
                <Modal show="true" backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <span>During the Report of Proposed Debt Issuance (RPDI), the submitters must provide the following:</span>
                            <ul style={{listStyleType: 'lower-alpha'}}>
                                <li> Name of the issue</li>
                                <li> Name of the project</li>
                                <li> Proposed Date of Sale</li>
                                <li> Principal amount to be sold</li>
                                <li>Whether a validation action will be pursued</li>
                                <li>Is the debt repayable in non-US currency.  This is required to be provided per the statute.</li>
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }
            </h1>
            
            <FormInput label="Issuer Name" 
                name="issuerName" 
                type="text" 
                onChange={(e)=>handleChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.issuerName} 
                validations={["required", "maxLength:120"]}
                isrequired="true"
                value={user && user.issuerName}
                disabled={true}
                helpText="Name of the issuer"/>
            
            <FormInput label="Issue Name" 
                name="issueName" 
                type="text" 
                onChange={(e)=>handleChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.issueName} 
                validations={["required", "maxLength:120"]}
                isrequired="true"
                helpText="Name of the issue"/>

            <FormInput label="Project Name" 
                name="projectName" 
                type="text" 
                onChange={(e)=>handleChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.projectName} 
                validations={["maxLength:120"]}
                helpText="Name of the project"/>

            {/* <FormInput label="Authority Reduced Amount" 
                name="authReducedAmount" 
                type="text" 
                value={issuerInfo.authReducedAmount}
                onChange={(e)=>handleAmountChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.authReducedAmount} 
                validations={["required", "max:999999999999.99"]}/> */}
            {/* <CurrencyInput placeholder="0.00" 
                label="Authority Reduced Amount" 
                name="authReducedAmount" 
                type="text" 
                value={issuerInfo.authReducedAmount}
                onChange={(e)=>handleChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.authReducedAmount} 
                validations={["required", "max:999999999999.99"]}/> */}
            <Row>
            <Col md={6}>
            <FormInput label="Proposed Sale Date" 
                name="propSaleDate" 
                type="date" 
                value={issuerInfo.propSaleDate}
                onChange={(e)=>handleChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.propSaleDate} 
                validations={["required"]}
                isrequired="true"
                helpText="Proposed Date of Sale"/>
            </Col>
            <Col md={6}>
                <div className="control">
            <CurrencyInput placeholder="0.00" 
                label="Principal to be sold" 
                name="principleSold" 
                type="text" 
                value={issuerInfo.principleSold}
                onChange={(e)=>handleChange(e)} 
                onBlur={e=>validateField(e)}
                error={formErrors.principleSold} 
                validations={["required", "max:999999999999.99"]}
                isrequired="true"
                helpText="Principal amount to be sold"/>
                </div>
                </Col>
            </Row>
            <br />
            <div className="mb-3">
                <label htmlFor="validateAction">Will a Validation Action be Pursued: 
                    <MDBTooltip
                    domElement
                    tag="span"
                    placement="right"
                    >
                    <span>{"  "}<AiFillQuestionCircle className="help-icon heading-help-icon"/></span>
                    <span>Whether a validation action will be pursued</span>
                    </MDBTooltip>
                </label>
                <Form.Check
                    inline
                    label="No"
                    name="validateAction"
                    type="radio"
                    value="N"
                    id="validateAction-1"
                    checked={issuerInfo.validateAction === 'N'}
                    onChange={(e)=>handleChange(e)}
                />
                <Form.Check
                    inline
                    label="Yes"
                    name="validateAction"
                    type="radio"
                    value="Y"
                    id="validateAction-2"
                    checked={issuerInfo.validateAction === 'Y'}
                    onChange={(e)=>handleChange(e)}
                />
                <Form.Check
                    inline
                    label="Unknown"
                    name="validateAction"
                    value="unknown"
                    type="radio"
                    id="validateAction-3"
                    checked={issuerInfo.validateAction === 'unknown'}
                    onChange={(e)=>handleChange(e)}
                />
                {formErrors.validateAction && <p className="error">{formErrors.validateAction}</p>}

            </div>
            <div className="mb-3">
                <label htmlFor="debtRepayable">Is debt repayable in non-US currency:
                    <MDBTooltip
                    domElement
                    tag="span"
                    placement="right"
                    >
                    <span>{"  "}<AiFillQuestionCircle className="help-icon heading-help-icon"/></span>
                    <span>Is the debt repayable in non-US currency.  This is required to be provided per the statute.</span>
                    </MDBTooltip>
                </label>
                <Form.Check
                    inline
                    label="No"
                    name="debtRepayable"
                    type="radio"
                    id="debtRepayable-1"
                />
                <Form.Check
                    inline
                    label="Yes"
                    name="debtRepayable"
                    type="radio"
                    id="debtRepayable-2"
                />
                <Form.Check
                    inline
                    label="Unknown"
                    name="debtRepayable"
                    type="radio"
                    id="debtRepayable-3"
                />
                {formErrors.debtRepayable && <p className="error">{formErrors.debtRepayable}</p>}
            </div>
            <div className="btn-div">
            <button className="custom-button fright" type="button" onMouseDown={(e)=>validateForm(e)}>Next</button>
            {/* <Button className="fright" type="button" onClick={()=>saveIssuer({issuerName: "aaa"})}>Continue</Button> */}
            </div>
            
        </Form> 
        
        {/* <button><Link to='/issuer-contact'>Continue</Link></button> */}
        </Card>
    )
}

///const saveIssuer = () => ({ type: 'SAVE_ISSUER', payload: "aaaaaaa" })

// const _Issuer = connect(
//     (state) => ({
//       issuer: state.issuer,
//     }),
//     (dispatch) => bindActionCreators({ saveIssuer }, dispatch)
//   )(Issuer);
  
export default Issuer;