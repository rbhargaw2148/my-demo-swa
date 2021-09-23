import { Collapse } from "react-bootstrap"
import Issuance from './issuance'
import FundBalance from './fundBalance'
import {FaPlus, FaMinus} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import DelinquentReporting from './delinquentReporting'
import RetiredIssues from '../melloRoos/retiredIssues'
import FilingContact from '../melloRoos/filingContact'
import Comments from '../privateSaleReasonReport/comments'
import MKRLocalObligorsYFSReview from './mkrLocalObligorsYFSReview'

const CollapsibleWidgets = ({openSectionObj, toggleWidget, openSection}) => {
    const retiredIssuesIns = "Complete this section if the local obligation(s) reached final maturity. Must be during the reporting period (July 1 through June 30 of the reporting fiscal period). Indicate how the issue/loan was retired (matured, redeemed, repaid, or other).";
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
            id="delinquentReporting" aria-expanded={openSectionObj.delinquentReporting} aria-controls="collapse_delinquentReporting" onClick={()=>toggleWidget('delinquentReporting')}> {!openSectionObj.delinquentReporting ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Delinquent Reporting</button> 
        </h5>
        <Collapse in={openSectionObj.delinquentReporting}>
          <div id="collapse_delinquentReporting">
            <DelinquentReporting openWidget={openSection} />
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
            <MKRLocalObligorsYFSReview openWidget={openSection} sectionName={'review'}/>
            </div>
        </Collapse>
      </div>
      </div>
      </>
    );
}

export default CollapsibleWidgets
