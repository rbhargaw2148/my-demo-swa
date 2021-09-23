import { Collapse } from "react-bootstrap"
import Issuance from './issuance'
import FundBalance from './fundBalance'
import AssessedValue from './assessedValue'
// import Comments from './comments'
// import DrawOnReserveReview from './drawOnReserveReview'
import {FaPlus, FaMinus} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaxCollection from './taxCollection'
import DelinquentReporting from './delinquentReporting'
import DocUpload from './docUpload'
import Foreclosure from './foreclosure'
import RetiredIssues from './retiredIssues'
import FilingContact from './filingContact'
import Comments from '../privateSaleReasonReport/comments'
import MelloRoosYFSReview from './melloRoosYFSReview'

const CollapsibleWidgets = ({openSectionObj, toggleWidget, openSection}) => {
    const retiredIssuesIns = "If this issue is no longer subject to the requirements of the law, indicate the reason (i.e. Issue redeemed entirely, issue fully matured, etc.) within the current reporting fiscal year. Please include the CDIAC number and issue date of the new refunding bond(s).";
    
    return (
      <>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="issuance" aria-expanded={openSectionObj.issuance} aria-controls="collapse_issuance" onClick={()=>toggleWidget('issuance')}> {!openSectionObj.issuance ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Issuance </button> 
          </h5>
          <Collapse in={openSectionObj.issuance}>
            <div id="collapse_issuance">
              <Issuance openWidget={openSection}/>
            </div>
          </Collapse>
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="draw" aria-expanded={openSectionObj.fundBalance} aria-controls="collapse_fundBalance" onClick={()=>toggleWidget('fundBalance')}> {!openSectionObj.fundBalance ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Fund Balance</button> 
          </h5>
          <Collapse in={openSectionObj.fundBalance}>
            <div id="collapse_fundBalance">
              <FundBalance openWidget={openSection}/>
              </div>
          </Collapse>
        </div>
      </div>
     
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="assessedValue" aria-expanded={openSectionObj.assessedValue} aria-controls="collapse_assessedValue" onClick={()=>toggleWidget('assessedValue')}> {!openSectionObj.assessedValue ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Assessed Value </button> 
          </h5>
          <Collapse in={openSectionObj.assessedValue}>
            <div id="collapse_assessedValue">
              <AssessedValue openWidget={openSection}/>
              </div>
          </Collapse>
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="taxCollection" aria-expanded={openSectionObj.taxCollection} aria-controls="collapse_taxCollection" onClick={()=>toggleWidget('taxCollection')}> {!openSectionObj.taxCollection ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Tax Collection </button> 
          </h5>
          <Collapse in={openSectionObj.taxCollection}>
            <div id="collapse_taxCollection">
              <TaxCollection openWidget={openSection}/>
              </div>
          </Collapse>
        </div> 
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="delinquentReporting" aria-expanded={openSectionObj.delinquentReporting} aria-controls="collapse_delinquentReporting" onClick={()=>toggleWidget('delinquentReporting')}> {!openSectionObj.delinquentReporting ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Delinquent Reporting</button> 
          </h5>
          <Collapse in={openSectionObj.delinquentReporting}>
            <div id="collapse_delinquentReporting">
              <DelinquentReporting openWidget={openSection}/>
              </div>
          </Collapse>
        </div>
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="docUpload" aria-expanded={openSectionObj.docUpload} aria-controls="collapse_docUpload" onClick={()=>toggleWidget('docUpload')}> {!openSectionObj.docUpload ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Upload Document</button> 
          </h5>
          <Collapse in={openSectionObj.docUpload}>
            <div id="collapse_docUpload">
              <DocUpload openWidget={openSection}/>
              </div>
          </Collapse>
        </div>
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="foreclosure" aria-expanded={openSectionObj.foreclosure} aria-controls="collapse_foreclosure" onClick={()=>toggleWidget('foreclosure')}> {!openSectionObj.foreclosure ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Foreclosure</button> 
          </h5>
          <Collapse in={openSectionObj.foreclosure}>
            <div id="collapse_foreclosure">
              <Foreclosure openWidget={openSection}/>
              </div>
          </Collapse>
        </div>
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="retiredIssues" aria-expanded={openSectionObj.retiredIssues} aria-controls="collapse_retiredIssues" onClick={()=>toggleWidget('retiredIssues')}> {!openSectionObj.retiredIssues ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Retired Issues</button> 
          </h5>
          <Collapse in={openSectionObj.retiredIssues}>
            <div id="collapse_retiredIssues">
              <RetiredIssues openWidget={openSection} instructions={retiredIssuesIns}/>
              </div>
          </Collapse>
        </div>
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="filingContact" aria-expanded={openSectionObj.filingContact} aria-controls="collapse_filingContact" onClick={()=>toggleWidget('filingContact')}> {!openSectionObj.filingContact ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Filing Contact</button> 
          </h5>
          <Collapse in={openSectionObj.filingContact}>
            <div id="collapse_filingContact">
              <FilingContact openWidget={openSection}/>
              </div>
          </Collapse>
        </div>
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="comments" aria-expanded={openSectionObj.comments} aria-controls="collapse_comments" onClick={()=>toggleWidget('comments')}> {!openSectionObj.comments ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Comments</button> 
          </h5>
          <Collapse in={openSectionObj.comments}>
            <div id="collapse_comments">
              <Comments openWidget={openSection} sectionName={'review'}/>
              </div>
          </Collapse>
        </div>
      </div>
      
      <div className="panel panel-default">
        <div className="panel-heading" role="tab"> 
          <h5 className="panel-title">
          <button
            type="button"
            className="link-button" 
            style={{color: '#000', textDecoration: 'none', fontWeight: '500'}} 
             id="review" aria-expanded={openSectionObj.review} aria-controls="collapse_review" onClick={()=>toggleWidget('review')}> {!openSectionObj.review ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Review</button> 
          </h5>
          <Collapse in={openSectionObj.review}>
            <div id="collapse_review">
              <MelloRoosYFSReview openWidget={openSection} sectionName={'review'}/>
              </div>
          </Collapse>
        </div>
      </div>
      <br/>
      </>
    );
}

export default CollapsibleWidgets
