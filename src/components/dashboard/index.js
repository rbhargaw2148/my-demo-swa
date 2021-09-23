import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Form, Row, Col, Collapse, Table} from 'react-bootstrap'
import {FaPlus, FaMinus, FaPenAlt} from 'react-icons/fa'
import DashboardWidget from './dashboardWidget'
import DashboardSearchModal from './dashboardSearchModal'
import AddContactModal from './addContactModal'
import EditContactModal from './editContactModal'
import ProposedAcknowledgementModal from '../proposedSaleReport/acknowledgementModal'
import ProposedSaleContextModal from '../proposedSaleReport/proposedSaleContextModal'
import FinalAcknowledgementModal from '../finalSaleReport/acknowledgementModal'
import { reportProposedSalePath, reportFinalSalePath } from '../../Routes'
import Card from '../ui/Card'
const Reports = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const [issuername, setIssuerName] = useState("");
    const [openIssuerDetails, setOpenIssuerDetails] =useState(true);
    const [openContactDetails, setOpenContactDetails] =useState(true);
    const [openDashboard, setOpenDashboard] =useState(true);
    const [showSearchModal, setShowSearchModal] = useState(false);
    //const [showDashBoardDetails, setShowDashBoardDetails] = useState(false);
    const [showAddContactModal, setShowAddContactModal] = useState(false);
    const [showEditContactModal, setShowEditContactModal] = useState(false);
    const [editContactInfo, setEditContactInfo] = useState({});
    const [selectedPath, setSelectedPath] = useState('');

    const [showAknowledgeModal, setShowAknowledgeModal] = useState(false);
    const [showContextModal, setShowContextModal] = useState(false);
    const history = useHistory();

    const handleNewReportLinkClick = (e, path) => {
      e.preventDefault();
      if(path === '/dashboard/report-proposed-sale'){
          setSelectedPath(path);
          setShowContextModal(true);
      } else if(path === '/dashboard/report-final-sale'){
        setSelectedPath(path);
        setShowAknowledgeModal(true);
      } else {
          history.push(path);
      }
    }
    const onRPDIContextClose = () =>{
      setShowContextModal(false);
      setShowAknowledgeModal(true);
    }

    const handleChange = (e) => {
      setIssuerName(e.target.value);
    }

    const handleSubmit = () => {
      const userInfo = {...user, issuerName: issuername}
      sessionStorage.setItem('user', JSON.stringify(userInfo));
     // setShowDashBoardDetails(true);
    }

    const propposedDebtReports = {
      "Cancelled": 3,
      "Draft" : 5,
      "Marked Sold" : 19,
      "Reviewed": 8,
      "Submitted": 14,         
    }
    const finalSaleReports = {
      "Cancelled": 3,
      "Pending" : 5,
      "Reviewed": 8,
      "Submitted": 14,      
    }
    const annualTransperancyDebtReports = {
      "Draft" : 5,
      "Submitted": 14,
      "Reviewed": 8,
      "Missed / Pending Submissions" : 9,
      "Cancelled": 3
    }
    const pvtSaleReports = {
      "Submitted": 14,
      "Reviewed": 8,
    }
    
    const roles =  {
      "ADTR" : "ADTR Main Contact",
      "AG" :	"Agency",
      "BC"	: "Bond Counsel",
      "BRC" :	"Borrower Counsl/Loan",
      "BRW" :	"Borrower's Counsel",
      "CB"	: "Co-Bond Counsel",
      "CDC"	: "Co-Disclosure Counse",
      "CFA"	: "Co-Financial Advisor",
      "CGR" :	"Co-Guarantor",
      "CoPA" :	"Co-Placement Agent",
      "CoTR" :	"Co-Trustee",
      "CPU" :	"Co-Purchaser",
      "CUW"	: "Co-Underwriter",
      "DA" :	"Dissemination Agent",
      "DC"	:"Disclosure Counsel",
      "FA"	: "Financial Advisor",
      "FC"	:"Filing Contact",
      "FINC"	:"Financial Contact",
      "GR"	: "Guarantor",
      "IN"	: "Invoicee",
      "IN2"	: "2nd Invoicee",
      "IS"	: "Issuer",
      "LE"	: "Lender",
      "LES"	: "Lessor",
      "MA"	: "Municipal Advisor",
      "MC"	: "Main Contact",
      "MK"	: "MKR Main Contact",
      "ML"	: "MLR Main Contact",
      "NRNR" :	"Reasons Contact",
      "OC" :	"Organization Contact",
      "OTH" :	"Other Role",
      "PA" :	"Placement Agent",
      "PC" :	"Purchaser Counsel",
      "PU" :	"Purchaser",
      "SA" :	"Successor Agency",
      "TR" :	"Trustee/Paying Agent",
      "UW" :	"Underwriter",
      "UWC"	:"Underwriter Counsel",
      }

    const contacts = [
      {
        roleTypeId : 'MC',
        roleDesc: 'Main Contact',
        firstName: 'John',
        lastName: 'Doe',
        middleName: 'e',
        email: 'john.doe@gmail.com'
      },
      {
        roleTypeId : 'BC',
        roleDesc: 'Bond Counsil',
        firstName: 'Tim',
        lastName: 'Taylor',
        middleName: '',
        email: 'tim.taylor@gmail.com'
      }
    ]

    const handleEditContact = (contact) => {
      setEditContactInfo(contact);
      setShowEditContactModal(true)
      // <AddEditContactModal roles={roles} onModalClose={()=>setShowAddContactModal(false)} contactInfo={contact}/>
    }
    

    return (
          <Card>
            <form className="form">
              <label>Issuer:</label>
              <Form.Select onChange={(e)=>handleChange(e)} defaultValue={issuername}>
                <option>Select</option>
                <option value="San Diego">San Diego</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="San Fransisco">San Fransisco</option>
              </Form.Select>

              <div className="btn-div">
              <button type="button" onClick={()=>handleSubmit()}className="custom-button">Submit</button>
              </div>
            </form>

             {/* Dashboard */}
             {/* className="panel-heading" */}
             {/* { showDashBoardDetails && <> */}
             <div className="panel panel-default">
              <div className="panel-heading" role="tab">
              <h5 className="panel-title">
              <button
                type="button"
                className="link-button" 
                style={{color: '#000', textDecoration: 'none', fontWeight: '500'}}
               aria-expanded={openDashboard} aria-controls="dashboard" onClick={()=>setOpenDashboard(!openDashboard)}> {!openDashboard ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Dashboard</button> 
              </h5>
              </div>
                   
              <Collapse in={openDashboard}>
              <div id="dashboard">
                <div style={{overflow: 'auto', margin: '10px'}}>
                <button className="fright" type="button" onClick={()=>setShowSearchModal(true)}> Refine Search</button>
                </div>
                <Card>
                <Row className="justify-content-md-center">
        
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Report of Proposed Debt"
                    reports={propposedDebtReports}
                    linkTo="/dashboard/report-proposed-sale"
                    newReportLink={handleNewReportLinkClick}/>
                  </Col>
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Report of Final Sale"
                    reports={finalSaleReports}/>
                  </Col>
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Reason for Pvt Sale for Refunding/Revenue Bonds"
                    reports={pvtSaleReports}/>
                  </Col>
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Annual Debt Transparency Report"
                    reports={annualTransperancyDebtReports}/>
                  </Col>
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Mello Roos"
                    reports={finalSaleReports}/>
                  </Col>
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Marks Roos (Authority)"
                    reports={finalSaleReports}/>
                  </Col>
                  <Col xs={12} sm={6} xl={4} className="mb-4">
                    <DashboardWidget 
                    title="Marks Roos (Local)"
                    reports={finalSaleReports}/>
                  </Col>
                </Row>
                </Card>
              </div>
              </Collapse>
            </div>

            {/* Issuer Details  */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab"> 
              <h5 className="panel-title">
              <button
                type="button"
                className="link-button" 
                style={{color: '#000', textDecoration: 'none', fontWeight: '500'}}
                aria-expanded={openIssuerDetails} aria-controls="issuer_details" onClick={()=>setOpenIssuerDetails(!openIssuerDetails)}> {!openIssuerDetails ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Issuer Details </button> 
              </h5>
              </div>
                   
              <Collapse in={openIssuerDetails}>
              <div id="issuer_details">
                <Card>
                  <div className="form">
                    <h3>Issuer Details</h3>
                    <Row>
                <Col md={4} className="control">
                  <label>First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                    />
                </Col>
                <Col md={4} className="control">
                <label>Middle Name</label>

                    <input label="Middle Name" type="text" name="middleName" 
                    />
                </Col>
                <Col md={4} className="control">
                    <label>Last Name</label>
                    <input label="Last Name" type="text" name="lastName" 
                    />
                </Col>
            </Row>
            <div className="control">
                <label>Email</label>

                <input label="Email" type="email" name="email" 
                />
            </div>
            <div className="control">
                <label>Title</label>

                <input label="Title" type="text" name="title" 
                />
            </div>
            <Row>
                <Col md={6} className="control">
                    <label>Address Line1</label>
                    <input type="text" name="addressLine1" 
                    />
                </Col>
                <Col md={6} className="control">
                  <label>Address Line2</label>
                  <input type="text" name="addressLine2" 
                />
                </Col>
                <Col md={6} className="control">
                  <label>Address Line3</label>
                    <input type="text" name="addressLine3"/>
                </Col>
                <Col md={6} className="control">
                  <label>Address Line4</label>
                    <input type="text" name="addressLine4" />
                </Col>
            </Row>
                    <Row>
                        <Col md={3} className="control">
                          <label>City</label>
                          <input type="text" name="city"/>
                        </Col>
                        <Col md={3} className="control">
                        <label>State</label>
                        <input label="State" type="text" name="state" 
                        />
                        </Col>
                        <Col md={3} className="control">
                        <label>Zip Code</label>
                        <input label="Zip Code" type="text" name="zipCode"
                        />
                        </Col>
                        <Col md={3} className="control">
                            <label>Issuer Located In:</label>
                            <input name="issuerLocatedIn" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="control">
                          <label>Area Code</label>
                          <input name="areaCode" readOnly/>
                        </Col>
                        <Col md={4} className="control">
                            <label>Phone Number (XXX-XXXX)</label>
                            <input type="text" readOnly />
                        </Col>
                        <Col md={4} className="control">
                          <label>Ext</label>
                          <input label="Ext" name="phoneExt"/>
                        </Col>
                    </Row>
            
                  </div>
                </Card>

              </div>
              </Collapse>
            </div>

            {/* Contact Details  */}
            <div className="panel panel-default">
              <div className="panel-heading" role="tab"> 
              <h5 className="panel-title">
              <button
                type="button"
                className="link-button" 
                style={{color: '#000', textDecoration: 'none', fontWeight: '500'}}
                aria-expanded={openContactDetails} aria-controls="contact_details" onClick={()=>setOpenContactDetails(!openContactDetails)}> {!openContactDetails ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Financial Participation </button> 
              </h5>
              </div>
                   
              <Collapse in={openContactDetails}>
              <div id="contact_details">
                <Card>
                  <div className="form">
                    <div>
                      <Table>
                        <thead>
                          <tr>
                            <th>Role</th>
                            <th>Organization</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {contacts.map((contact, i) => {
                            return (<tr key={i}>
                            <td>{contact.roleDesc}</td>
                            <td>{contact.org}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td><FaPenAlt onClick={()=>handleEditContact(contact)} className="button"/></td>
                            </tr>)
                          })}
                          
                        </tbody>
                      </Table>
                    </div>

                  <br />
                  <div>
                  {/* <button type="button">Edit Contact</button>{" "} */}
                  <button type="button" onClick={()=>setShowAddContactModal(true)}>Add Contact</button>
                  </div>
                </div>
                </Card>

              </div>
              </Collapse>
            </div>
             
          {/* </>
          } */}

          {showSearchModal && <DashboardSearchModal onModalClose={()=>setShowSearchModal(false)} />}
          {showAddContactModal && <AddContactModal roles={roles} onModalClose={()=>setShowAddContactModal(false)}/>}
          {showEditContactModal && <EditContactModal roles={roles} onModalClose={()=>setShowEditContactModal(false)} contactInfo={editContactInfo}/>}
          
          {showContextModal &&  (selectedPath === reportProposedSalePath ) && <ProposedSaleContextModal onModalClose={()=>onRPDIContextClose()}/>}
          {showAknowledgeModal &&  (selectedPath === reportProposedSalePath ) && <ProposedAcknowledgementModal onModalClose={()=>setShowAknowledgeModal(false)}/>}
          {showAknowledgeModal &&  (selectedPath === reportFinalSalePath ) && <FinalAcknowledgementModal onModalClose={()=>setShowAknowledgeModal(false)}/>}

          </Card>
       
        
    )
}

export default Reports
