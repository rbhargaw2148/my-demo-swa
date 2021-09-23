import React, {useState} from 'react'
import { Form, Col } from 'react-bootstrap'
import Card from '../../components/ui/Card'
// import classes from '../formElements/Input.module.css'
// import { Link } from 'react-router-dom'
// import { FcBinoculars } from 'react-icons/fc'
//import {useHistory} from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead';
import Select from 'react-select';
import { FiPlusCircle, FiMinusCircle} from 'react-icons/fi'
import AddContactModal from '../dashboard/addContactModal'



const RetiredIssues = (props) => {
    //const history = useHistory();

    const roles =  [
        {value: "ADTR", label : "ADTR Main Contact"},
        {value: "AG", label :	"Agency"},
        {value: "BC", label : "Bond Counsel"},
        {value: "BRC", label:	"Borrower Counsl/Loan"},
        {value: "BRW", label:	"Borrower's Counsel"},
        {value: "CB", label: "Co-Bond Counsel"},
        {value: "CDC", label: "Co-Disclosure Counse"},
        {value: "CFA", label: "Co-Financial Advisor"},
        {value: "CGR", label :	"Co-Guarantor"},
        {value: "CoPA", label:	"Co-Placement Agent"},
        {value: "CoTR", label:	"Co-Trustee"},
        {value: "CPU", label:	"Co-Purchaser"},
        {value: "CUW", label: "Co-Underwriter"},
        {value: "DA", label:	"Dissemination Agent"},
        {value: "DC", label: "Disclosure Counsel"},
        {value: "FA",label : "Financial Advisor"},
        {value: "FC", label :"Filing Contact"},
        {value: "FINC", label :"Financial Contact"},
        {value: "GR", label : "Guarantor"},
        {value: "IN", label : "Invoicee"},
        {value: "IN2", label : "2nd Invoicee"},
        {value: "IS", label	: "Issuer"},
        {value: "LE", label	: "Lender"},
        {value: "LES", label : "Lessor"},
        {value: "MA", label	: "Municipal Advisor"},
        {value: "MC", label	: "Main Contact"},
        {value: "MK", label	: "MKR Main Contact"},
        {value: "ML", label	: "MLR Main Contact"},
        {value: "NRNR", label :	"Reasons Contact"},
        {value: "OC", label :	"Organization Contact"},
        {value: "OTH", label :	"Other Role"},
        {value: "PA", label :	"Placement Agent"},
        {value: "PC", label :	"Purchaser Counsel"},
        {value: "PU", label :	"Purchaser"},
        {value: "SA", label :	"Successor Agency"},
        {value: "TR", label :	"Trustee/Paying Agent"},
        {value: "UW", label :	"Underwriter"},
        {value: "UWC", label :"Underwriter Counsel"},
    ]

    const [addContact, setAddContact] = useState(false);
    const [contactType, setContactType] = useState(null);

    const [financingContacts, setFinancingContacts] = useState([
        {
            contactRole: {code: "", desc: ""},
            contactName: "",
            contactType: ""
        }
    ])

    const handleMainContactChange = (e) => {
    }
    const handleContactChange = (e, i) => {
        const fContacts = [...financingContacts];
        fContacts[i].contactName = e.target.value;
        setFinancingContacts(fContacts);
    }
    const handleContactRoleChange = (e, i) => {
        const fContacts = [...financingContacts];
        fContacts[i].contactRole.code = e.value;
        fContacts[i].contactRole.desc = e.label;
        setFinancingContacts(fContacts);
    }
    const handleContactTypeChange = (e, i) => {
        const fContacts = [...financingContacts];
        fContacts[i].contactType = e.target.value;
        setFinancingContacts(fContacts);
    }

    const addFinancingContact = () => {
        const fContacts = [...financingContacts, {
            contactRole: {code: "", desc: ""},
            contactName: "",
            contactType: ""
        }];
        setFinancingContacts(fContacts);
    }
    const handleAddContact = (e, i) => {
        setAddContact(true);
        setContactType(financingContacts[i].contactType)
    }
    const removeFinancingContact = () => {}
    const validateForm = (e) => {
        props.openWidget('interestDebtExempt');
        //history.push("/reports/report-proposed-sale/interest-debt-exempt")
    }
    return (
        <Card>
        <Form className="form">
            <h3>Financing Participants
                <br/>
            <span style={{fontSize:'12px'}}>(Leave blank if no Financing Participants)</span>
            </h3>
            
            <div className="control">
                <label>Issuer Main Contact:</label>
                <Typeahead
                    id={"contact"+1}
                    onBlur={(e) => {
                        handleMainContactChange(e)
                    }}
                    options={[ "John Doe", "Darrell Steinberg"]}
                    />
            </div>

            <div>
                <table>
                    <tbody>
                    {financingContacts.map((item, i) => {
                        return (<React.Fragment key={i}>
                            <tr id={i+1} key={Math.random()}>
                                <td>
                                    <Col md={9} style={{paddingLeft: '0px', paddingRighe: '0px'}}>
                                    <label>Financing Participant ({i+1}):</label>
                                    <Select
                                        key={i}
                                        value={
                                            roles.filter(option => 
                                               option.value === item.contactRole.code)
                                         }
                                        onChange={(e)=>handleContactRoleChange(e, i)}
                                        options={roles}
                                    />
                                    </Col>
                                </td>
                                <td style={{verticalAlign: 'bottom', paddingBottom: '10px'}}>
                                    <button type="button" className="dk-blue-color link-button"><FiPlusCircle onClick={() => addFinancingContact()}/></button>
                                    <button type="button" className="dk-blue-color link-button"><FiMinusCircle onClick={()=>removeFinancingContact(i)}/></button>
                                </td>
                            </tr>
                            { item.contactRole.code !== "" && <tr key={Math.random()}>
                                <td>
                                <div>
                                    <label>Contact Type: </label>
                                    <div style={{display: 'flex'}}>
                                    <Form.Check type="radio" name={"contact_type"+i} label="Organization" value="organization" onChange={(e)=>handleContactTypeChange(e, i)}/>

                                    <Form.Check type="radio" name={"contact_type"+i} label="Individual" value="individual" onChange={(e)=>handleContactTypeChange(e, i)}/>
                                    </div>
                                </div>
                                <div className="control">
                                    <label>{item.contactRole.desc}:</label>
                                    <Typeahead
                                        id={"contact"+i}
                                        key={"contact"+i}
                                        onBlur={(e) => {
                                            handleContactChange(e, i)
                                        }}
                                        options={[ "John Doe", "Darrell Steinberg"]}
                                        />
                                </div>
                                
                                <div><button type="button" onClick={(e)=>handleAddContact(e, i)} >Add {item.contactType === "organization" ? "Organization" : "Contact"}</button></div>
                                </td>
                            </tr>}
                        </React.Fragment> )
                        })
                        }

                    </tbody>
                </table>
            </div>
            <br />
            <div className="mb-20">
                <h5 className="mb-10">Contacts</h5>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Organization</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Issuer Main Contact</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {financingContacts && financingContacts.filter(contact => contact.contactRole.code !== "").map((contact, i) => {
                            // if(contact.contactRole.code !== "") {
                                return( <tr key={i}>
                                <td>{contact.contactRole.desc}</td>
                                <td>{contact.contactName}</td>
                                <td></td>
                                <td></td>
                                </tr>)
                            // }
                        })}
                    </tbody>
                </table>
            </div> 

            
            {/* <div className={classes.control}>
                <label>Lessor:</label>
                <FcBinoculars className="binocular-icon"/>
                <div style={{marginRight: '25px'}}><input type="text"/></div>
            </div> */}

            <div className="btn-div">
            <button className="custom-button">Back</button>
            <button className="custom-button fright" type="button" onClick={()=>validateForm()}>Next</button>
            </div>
        </Form> 
        {addContact && <AddContactModal onModalClose={()=>setAddContact(false)} contactType={contactType} />}
        </Card>
    )
}

export default RetiredIssues
