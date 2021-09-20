import {useState} from 'react'
import { Button, Collapse } from "react-bootstrap"
import Issuer from '../issuer'
import IssuanceAuthorization from '../issuanceAthorization'
import Statutories from '../statutories'
import IssuerContact from '../issuerContact'
import FilingContact from '../filingContact'
import RetiredIssues from '../retiredIssues'
import InterestDebtExempt from '../interestDebtExempt'
import TypeOfSale from '../typeOfSale'
import TypeOfDebt from '../typeOfDebt'
import SourceOfRepayment from '../sourceOfRepayment'
import PurposeOfFinancing from '../purposeOfFinancing'
import DocumentUpload from '../documentUpload'
import Review from '../proposedDebtReview'

import {FaPlus, FaMinus} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const CollapsibleWidgets = ({openSectionObj, toggleWidget, openSection}) => {
    // const [openSection, setOpenSection] = useState({
    //     issuer: false,
    //     issuanceAuthorization: false,
    //     statutories: false,
    //     issuerContact: false,
    //     filingContact: false,
    //     retiredIssues: false,
    //     typeOfDebt: false,
    //     interestDebtExempt: false,
    //     typeOfSale: false,
    //     sourceOfRepayment: false,
    //     purposeOfFinancing: false,
    //     uploadDoc: false,
    //     review: false
    // });

    // const toggleWidget = (sectionName) => {
    //   setOpenSection({...openSection, [sectionName]: !(openSection[sectionName])})
    // }
    return (
      <>
      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.issuer} aria-controls="collapse_issuer" onClick={()=>toggleWidget('issuer')}> {!openSectionObj.issuer ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Issuer </a> 
        </h5>
        <Collapse in={openSectionObj.issuer}>
          <div id="collapse_issuer">
            <Issuer openWidget={openSection}/>
          </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.issuanceAuthorization} aria-controls="collapse_issuance_authorization" onClick={()=>toggleWidget('issuanceAuthorization')}> {!openSectionObj.issuanceAuthorization ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Issuance Authorization </a> 
        </h5>
        <Collapse in={openSectionObj.issuanceAuthorization}>
          <div id="collapse_issuance_authorization">
            <IssuanceAuthorization openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.statutories} aria-controls="collapse_statutories" onClick={()=>toggleWidget('statutories')}> {!openSectionObj.statutories ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Statutes </a> 
        </h5>
        <Collapse in={openSectionObj.statutories}>
          <div id="collapse_statutories">
            <Statutories openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.issuerContact} aria-controls="collapse_issuer_contact" onClick={()=>toggleWidget('issuerContact')}> {!openSectionObj.issuerContact ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Issuer Contact </a> 
        </h5>
        <Collapse in={openSectionObj.issuerContact}>
          <div id="collapse_issuance_authorization">
            <IssuerContact openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.filingContact} aria-controls="collapse_filing_contact" onClick={()=>toggleWidget('filingContact')}> {!openSectionObj.filingContact ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Filing Contact </a> 
        </h5>
        <Collapse in={openSectionObj.filingContact}>
          <div id="collapse_issuance_authorization">
            <FilingContact openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.financingParticipants} aria-controls="collapse_financingParticipants" onClick={()=>toggleWidget('financingParticipants')}> {!openSectionObj.financingParticipants ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Financing Participants</a> 
        </h5>
        <Collapse in={openSectionObj.financingParticipants}>
          <div id="collapse_financingParticipants">
            <RetiredIssues openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.interestDebtExempt} aria-controls="collapse_interestDebtExempt" onClick={()=>toggleWidget('interestDebtExempt')}> {!openSectionObj.interestDebtExempt ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Interest Debt Exempt </a> 
        </h5>
        <Collapse in={openSectionObj.interestDebtExempt}>
          <div id="collapse_interestDebtExempt">
            <InterestDebtExempt openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.filingContact} aria-controls="collapse_typeofsale" onClick={()=>toggleWidget('typeOfSale')}> {!openSectionObj.typeOfSale ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Misc </a> 
        </h5>
        <Collapse in={openSectionObj.typeOfSale}>
          <div id="collapse_typeofsale">
            <TypeOfSale openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.typeOfDebt} aria-controls="collapse_typeofdebt" onClick={()=>toggleWidget('typeOfDebt')}> {!openSectionObj.typeOfDebt ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Type of Debt Instrument </a> 
        </h5>
        <Collapse in={openSectionObj.typeOfDebt}>
          <div id="collapse_typeofdebt">
            <TypeOfDebt openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.sourceOfRepayment} aria-controls="collapse_source_of_repayment" onClick={()=>toggleWidget('sourceOfRepayment')}> {!openSectionObj.sourceOfRepayment ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Source of Repayment </a> 
        </h5>
        <Collapse in={openSectionObj.sourceOfRepayment}>
          <div id="collapse_source_of_repayment">
            <SourceOfRepayment openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.purposeOfFinancing} aria-controls="collapse_purpose_of_financing" onClick={()=>toggleWidget('purposeOfFinancing')}> {!openSectionObj.purposeOfFinancing ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Purpose of Financing </a> 
        </h5>
        <Collapse in={openSectionObj.purposeOfFinancing}>
          <div id="collapse_issuance_authorization">
            <PurposeOfFinancing openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.uploadDoc} aria-controls="collapse_upload_doc" onClick={()=>toggleWidget('uploadDoc')}> {!openSectionObj.uploadDoc ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Upload Document </a> 
        </h5>
        <Collapse in={openSectionObj.uploadDoc}>
          <div id="collapse_issuance_authorization">
            <DocumentUpload openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.review} aria-controls="collapse_filing_contact" onClick={()=>toggleWidget('review')}> {!openSectionObj.review ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Review </a> 
        </h5>
        <Collapse in={openSectionObj.review}>
          <div id="collapse_issuance_authorization">
            <Review />
            </div>
        </Collapse>
      </div>
      </>
    );
}

export default CollapsibleWidgets
