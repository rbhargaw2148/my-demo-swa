import Card from '../ui/Card'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { FiPlusCircle, FiMinusCircle} from 'react-icons/fi'
import CurrencyInput from '../formElements/CurrencyInput'
import Select from 'react-select';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const statutoriesList = [
  { value: 'CEFA', label: 'California Educational Facilities Act' },
  { value: 'CHFAA', label: 'California Health Care Facilities Financing Authority Act' },
  { value: 'CIEB', label: 'California Infrastructure and Economic Dev Bank' },
  { value: 'OTH', label: 'Other' },
];

const Statutory = (props) => {
    const [showDebtForRefundingTextField, setShowDebtForRefundingTextField] = useState(false);
    const [showDebtForRefunding2TextField, setShowDebtForRefunding2TextField] = useState(false);
    // const statutoriesList = [
    //     {
    //         code: 1,
    //         description: 'California Educational Facilities Act'
    //     },
    //     {
    //         code: 2,
    //         description: 'California Health Care Facilities Financing Authority Act'
    //     },
    //     {
    //         code: 3,
    //         description: 'California Infrastructure and Economic Dev Bank'
    //     },
    //     {
    //         code: 4,
    //         description: 'Other'
    //     },
    // ]
    const [statutories, setStatutories] = useState({
        statutes: [{
            code: '',
            otherText: null,
        }],
        textfields: [{
            showTextField: false
        }]
    });

    const handleStatutoryCodeChange = (e,i) => {
        const {value, label} = e;
        let statutes = [...statutories.statutes];
        statutes[i].code = value;

        let textfields = [...statutories.textfields];

        if( value === "OTH" && label === "Other" ) {
            textfields[i].showTextField = true;
        } else {
            textfields[i].showTextField = false;
        }

        setStatutories({statutes, textfields});
    }

    const handleOtherTextChange = (e, i) => {
        const {value} = e.target;
        const statutoriesArray = {...statutories}
        statutoriesArray.statutes[i].otherText = value;
        setStatutories(statutoriesArray)
    }

    const addStatutoryCode = () => {
        let statutoriesArray = [...statutories.statutes, {
            code: "",
            otherText: null,
        }];
        let textFieldsArray = [...statutories.textfields, {
            showTextField: false
        }];
        setStatutories({statutes: statutoriesArray, textfields: textFieldsArray});
    }

    const removeAuthorization = (i) => {
        let statutoryCodesArray = [...statutories.statutes];

        if( statutoryCodesArray.length === 1) {
            statutoryCodesArray[0].code = ""
        } else {
        statutoryCodesArray.splice(i,1)
        }
        setStatutories({statues: statutoryCodesArray});
    }

    const handleChange = (e) => {
        const name = e.target.name;

        if( name === "rblDebtForRefunding") {
           if( e.target.value === 'Y' && e.target.checked ) {
            setShowDebtForRefundingTextField(true)
           } else {
            setShowDebtForRefundingTextField(false)
           }
        } else if( name === "rblDebtForRefunding2"){
            if( e.target.value === 'Y' && e.target.checked ) {
                setShowDebtForRefunding2TextField(true)
            } else {
                setShowDebtForRefunding2TextField(false)
            }
        }

    }
    const history = useHistory();
    const validateForm = (e) => {
        props.openWidget('issuerContact');
        //history.push("/reports/report-proposed-sale/issuer-contact")
    }

    return (
        <Card>
            <Form className="form">
            <h1>Statutes</h1>
            <div className="mb-3">
                <label>	Is any portion of the Debt for refunding outstanding Debt?</label>
                <div>
                <Form.Check
                    inline
                    label="No"
                    name="rblDebtForRefunding"
                    type="radio"
                    id="rblDebtForRefunding_0"
                    value="N"
                    onChange={(e)=>handleChange(e)}
                />
                <Form.Check
                    inline
                    label="Yes, amount proposed for refunding"
                    name="rblDebtForRefunding"
                    type="radio"
                    id="rblDebtForRefunding_1"
                    value="Y"
                    onChange={(e)=>handleChange(e)}
                />
                {showDebtForRefundingTextField && <Col md={3} style={{display: "inline-block"}}><div className="control"><CurrencyInput placeholder="0.00"/></div></Col> }
                </div>
                
            </div>
            <div className="mb-3">
                <label>Is any portion of the Debt to redeem, paydown, or refinance outstanding Debt?</label>
                <div>
                <Form.Check
                    inline
                    label="No"
                    value="N"
                    name="rblDebtForRefunding2"
                    type="radio"
                    id="rblDebtForRefunding2_0"
                    onChange={(e)=>handleChange(e)}
                />
                <Form.Check
                    inline
                    label="Yes, amount proposed for redemption, paydown, or refinancing"
                    value="Y"
                    name="rblDebtForRefunding2"
                    type="radio"
                    id="rblDebtForRefunding2_1"
                    onChange={(e)=>handleChange(e)}
                />
                {showDebtForRefunding2TextField && <Col md={3} style={{display: "inline-block"}}><div className="control"><CurrencyInput placeholder="0.00"/></div></Col>  }
                </div>
            </div>
            {/* {statutoryCodes.map((item, i) => {
            return (<div id={i+1} key={Math.random()}>
                <hr />
                <div>
                <span style={{float: "right"}}><button type="button" name="remove" title="Remove this component" onClick={()=>removeAuthorization(i)}>x</button></span><br />
                <label>Statutory code under which this debt will be issued ({i+1}):</label>
                </div>
                <Row>
                    <Col md={6}>
                        <div>
                            <Form.Select key={`statutoryCode${i+1}`} defaultValue={item.code} onChange={(e)=>handleStatutoryCodeChange(e, i)} >
                                <option value="">select</option>
                                {statutoriesList.map((item, i) => {
                                    return (
                                        <option key={`s${i}`} value={item.code}>{item.description}</option>
                                    )
                                })}
                            </Form.Select>
                        </div>
                    </Col>              
                </Row>
            </div>)
            })
            } */}

            <table>
                <tbody>
                {statutories.statutes.map((item, i) => {
                    console.log(statutories.textfields);
                    return (<><tr id={i+1} key={Math.random()}>
                        <td>
                            <label>{i == 0 && <span className="required">*</span>}Statutory code under which this debt will be issued ({i+1}):</label>
                                <Col md={6}>
                                <Select
                                    value={
                                        statutoriesList.filter(option => 
                                           option.value === item.code)
                                     }
                                    onChange={(e)=>handleStatutoryCodeChange(e, i)}
                                    options={statutoriesList}
                                />
                                        {/* <Form.Select key={`statutoryCode${i+1}`} defaultValue={item.code} onChange={(e)=>handleStatutoryCodeChange(e, i)} >
                                            <option value="">select</option>
                                            {statutoriesList.map((item, i) => {
                                                return (
                                                    <option key={`s${i}`} value={item.code}>{item.description}</option>
                                                )
                                            })}
                                        </Form.Select> */}
                                </Col>
                            </td>
                            <td style={{verticalAlign: 'middle'}}>
                                <a className="btn-link add-row"><FiPlusCircle onClick={() => addStatutoryCode()}/></a>
        			            <a className="btn-link delete-row"><FiMinusCircle onClick={()=>removeAuthorization(i)}/></a>
                            </td>
                        </tr>
                        <tr key={"othertext"+i}>
                            <td><Col md={6}>
                                <label></label>
                            {statutories.textfields[i].showTextField && 
                                <Typeahead
                                    id={"oth"+i}
                                    placeholder="Other Statute Name"
                                    onBlur={(e) => {
                                        handleOtherTextChange(e, i)
                                    }}
                                    options={[ "other text1", "other text2"]}
                                    />
                            }
                                {/* <input className="form-control" placeholder="Other Statute Name" onChange={(e)=>handleOtherTextChange(e, i)}/>  */}
                            </Col>
                            </td>
                        </tr>
                       </> )
                    })
                    }

                </tbody>
            </table>

            
            {/* <button className="custom-button" type="button" style={{marginTop: '10px'}} onClick={() => addAuthorization()}>Add Another Authorization</button> */}
            
            <div className="btn-div">
            <button className="custom-button">Back</button>
            <button className="custom-button fright" type="button" onClick={()=>validateForm()}>Next</button>
            </div>
            </Form>
        </Card>
    )
}

export default Statutory
