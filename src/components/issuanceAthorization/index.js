import Card from '../ui/Card'
import {Form, Row, Col, Modal} from 'react-bootstrap'
import { useState, forwardRef } from 'react'
import {FormInput} from '../formElements/FormInput'
import CurrencyInput from '../formElements/CurrencyInput'
import classes from './IssuanceAuthorization.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt } from 'react-icons/fa'
import {AiFillQuestionCircle} from 'react-icons/ai'
// import {useHistory} from 'react-router-dom'
// import { runValidations, validateFormFields } from '../../utils/index'
import { MDBTooltip } from 'mdbreact'

const CustomCalendarInput = forwardRef(
    (props, ref) => (

        // <div className="custom-calendar-div form-control">
        //  <span onClick={props.onClick} ref={ref}>
        //      <label>
        //     {props.value || props.placeholder}
        //     </label>
        // </span>
        // <FaCalendarAlt onClick={props.onClick} style={{float: 'right', marginTop:'0.3em'}} />
        // </div>
        <div>
           <div className="form-group">
                <input type="text" className="form-control" 
                value={props.value || props.placeholder} onClick={props.onClick} 
                name={props.name}
                data-validations={props.validations}
                style={props.error && {border: `solid 1px red`}}/>
                <FaCalendarAlt className="date-picker-icon" onClick={props.onClick}/>
            </div>
            {props.error && <p className="error">{ props.error }</p>}
            </div>
    ),
);


const IssuanceAuthorization = (props) => {
    const [authCount, setAuthCount] = useState(1)
    const [formErrors, setFormErrors] = useState([{}])
    const [showInstructionsModal, setShowInstructionsModal] = useState(false)
    const [authorizationInfo, setAuthorizationInfo] = useState({
        authorizations: [{
            voterMeasure: 'N',
            orgAuthAmount: "",
            replenishedAuthAmount: "",
            authorizationDate: "",
            authorityReducedAmount: "",
            authorizationName: "",
            netChange: "",
        }]
    })

    const handleAuthChange = (e,i) => {
        const {name, value} = e.target;
        const authorizations = [...authorizationInfo.authorizations];

        if( name.includes("voterMeasure")){
            if(e.target.checked) {
                authorizations[i]['voterMeasure'] = "Y";
            } else {
                authorizations[i]['voterMeasure'] = "N";
            }
        } else {
            authorizations[i][name] = value;
            if(name==="authorityReducedAmount" || name === "replenishedAuthAmount") {
                const replenishedAuthAmount = authorizations[i]['replenishedAuthAmount'] ? parseFloat(authorizations[i]['replenishedAuthAmount'].replace(/,/g, '')) : 0;
                const authorityReducedAmount = authorizations[i]['authorityReducedAmount'] ? parseFloat(authorizations[i]['authorityReducedAmount'].replace(/,/g, '')) : 0;
                const netChange = replenishedAuthAmount - authorityReducedAmount;
                authorizations[i]['netChange'] = String(netChange).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
        setAuthorizationInfo({authorizations});
    }

    const handleAuthorizationDate = (e, i) => {
        const authorizations = [...authorizationInfo.authorizations];
        authorizations[i]['authorizationDate'] = e.toLocaleDateString("en-US");
        setAuthorizationInfo({authorizations: authorizations});
    }

    const addAuthorization = () => {
        setAuthCount(authCount + 1);
        const authorizations = [...authorizationInfo.authorizations, {
            voterMeasure: 'N',
            orgAuthAmount: "",
            replenishedAuthAmount: "",
            authorizationDate: "",
            authorityReducedAmount: "",
            authorizationName: "",
            netChange: "",
        }];
        setAuthorizationInfo({authorizations: authorizations});
    }

    const removeAuthorization = (i) => {
        let authorizations = [...authorizationInfo.authorizations];
        authorizations.splice(i,1)
        setAuthorizationInfo({authorizations: authorizations})
    }

   // const history = useHistory();
    const validateForm = (e) => {
        let authorizations = [...authorizationInfo.authorizations];
       // let form = e.target.closest('form#issuanceAuthorization');
        let formErrors1 = [];
        let obj = {}
       // formErrors1[0] = {};
        Object.entries(authorizations[0]).forEach(([k, v]) => {
            if(k !== "netChange" && v === "") {
                obj[k] = "This field is required";
            }
        })
        formErrors1.push(obj);
        //let formErrors = validateFormFields(form.elements);

        if(Object.keys(obj).length > 0) {
            setFormErrors(formErrors1);
        } else {
            const proposedSale=JSON.parse(sessionStorage.getItem('ProposedSale'));
            proposedSale.issuanceAuthorization = authorizationInfo.authorizations;
            
            sessionStorage.setItem('ProposedSale', JSON.stringify(proposedSale))
                props.openWidget('statutories');
                //history.push("/dashboard/report-proposed-sale/issuer-contact")
        }
    }
    

    return (
        <Card>
            <Form className="form" id="issuanceAuthorizationForm">
            <h3>Issuance Authorization
                {' '}<AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

                {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <ul style={{listStyleType: 'lower-alpha'}}>
                                <li>The current Annual Debt Transparency Report ADTR requires submitters to identify the authorization, either provided by an act of the governing body or a vote of the electorate, under which the debt was issued.</li>
                                <li>The identification is made through the authorization “name”, the date of authorization, and the original amount of authorized issuance. The submitter must enter the amount of unissued authorization at the beginning of the reporting period and how much of that debt authorization was issued during the reporting period. The goal of this section of the ADTR is to disclose a balance of unissued, but authorized debt at the end of each reporting period for the authorization used to issue the specific debt being reported.</li>
                                <li>The authorization for a debt issuance will be reported first on the Report of Proposed Debt Issuance (RPDI).</li>
                                <li>The issue specific authorization data will be used and carried forward to the report of Report of Final Sale (RFS). Submitters will be able to either keep the authorization information they submitted on the RPDI, modify amounts reduced or replenished, select a different previously stored authorization, or create an entirely new authorization.</li>
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }
            </h3>
            
            {authorizationInfo.authorizations.map((item, i) => {
            return (<div id={`auth_${i+1}`} key={Math.random()}>
                <hr />
                <div>
                <span style={{float: "right"}}><button type="button" name="remove" title="Remove this component" onClick={()=>removeAuthorization(i)}>x</button></span><br />
                <h3 className={classes.authheading}>Issuance Authorization {i+1}</h3>
                </div>
                <div className="mb-3">
                    <label>Voter Measure:</label>
                    <Form.Check
                        inline
                        label="No"
                        name={`voterMeasure_${i}`}
                        type="radio"
                        id="voterMeasure_0"
                        checked={item.voterMeasure === 'N'}
                        onChange={(e)=>handleAuthChange(e, i)}
                    />
                    <Form.Check
                        inline
                        label="Yes"
                        name={`voterMeasure_${i}`}
                        type="radio"
                        id="voterMeasure_1"
                        checked={item.voterMeasure === 'Y'}
                        onChange={(e)=>handleAuthChange(e, i)}
                    />
                </div>
                <Row>
                    <Col md={6}>
                        <div className="control">
                            <CurrencyInput 
                            label="Original Authorized Amount" 
                            key={`orgAuthAmount${i+1}`} 
                            name="orgAuthAmount" 
                            defaultValue={item.orgAuthAmount} 
                            onBlur={(e)=>handleAuthChange(e, i)}
                            validations={ (i === 0) && ["required"]}
                            error={formErrors[i] && formErrors[i].orgAuthAmount} 
                            helpText="Original Authorized Amount"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <CurrencyInput key={`replenishedAuthAmount${i+1}`} 
                            label="Amount Authority Replenished (By this Issue)" 
                            name="replenishedAuthAmount" 
                            defaultValue={item.replenishedAuthAmount} 
                            onBlur={(e)=>handleAuthChange(e, i)}
                            validations={(i === 0) && ["required"]}
                            error={formErrors[i] && formErrors[i]['replenishedAuthAmount']}
                            helpText="Amount Authority Replenished (By this Issue)"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <label>Authorization Date: (MM/DD/YYYY): 
                                <MDBTooltip domElement tag="span" placement="right">
                                    <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                                    <span>Authorization Date</span>
                                </MDBTooltip>
                            </label>
                            <DatePicker 
                                key={`authorizationDate${i+1}`}
                                value={item.authorizationDate}
                                dateFormat="M/d/yyyy"
                                name="authorizationDate"
                                onChange={(e) => handleAuthorizationDate(e, i)} 
                                customInput={<CustomCalendarInput  validations={(i === 0) && ["required"]} 
                                error={formErrors[i] && formErrors[i]['authorizationDate']}/>}                                
                                />
                                
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <CurrencyInput key={`authorityReducedAmount${i+1}`} 
                                label="Amount Authority Reduced (By this Issue)" 
                                name="authorityReducedAmount" 
                                defaultValue={item.authorityReducedAmount} 
                                onBlur={(e)=>handleAuthChange(e, i)}
                                helpText="Amount Authority Reduced (By this Issue)"
                                validations={(i === 0) && ["required"]}
                                error ={ formErrors[i] && formErrors[i]['authorityReducedAmount'] }/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <FormInput key={`authorizationName${i+1}`} label="Authorization Name" 
                                name="authorizationName"
                                // value={item.authorizationName} 
                                // onChange={(e)=>handleAuthChange(e, i)} 
                                helpText="Authorization Name"
                                validations={(i === 0) && ["required"]}
                                error={formErrors[i] && formErrors[i]['authorizationName']}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <FormInput  key={`netChange${i+1}`} type="text" label="Net Change (By this Issue)" 
                            name="netChange" 
                            value={item.netChange}
                            disabled="disabled" 
                            helpText="Net Change"/>
                        </div>
                    </Col>                    
                </Row>
            </div>)
            })
            }
            <button type="button" className="custom-button" onClick={() => addAuthorization()}>Add Another Authorization</button>
            
            <div className="btn-div">
            <button className="custom-button" type="button">Back</button>
            <button className="custom-button fright" type="button" onMouseDown={(e)=>validateForm(e)}>Next</button>
            </div>
            </Form>
        </Card>
    )
}

export default IssuanceAuthorization
