import {useState} from 'react'
import { Button, Collapse } from "react-bootstrap"
import Issuance from './issuance'
import NegotiatedRefunding from './negotiatedRefunding'
import RevenuewBondsReason from './revenueBondsReason'
import ContactInformation from './contactInformation'
import Comments from './comments'
import PrivateSaleReasonReview from './privateSaleReasonReview'
import {FaPlus, FaMinus} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const CollapsibleWidgets = ({openSectionObj, toggleWidget, openSection}) => {
  
    return (
      <>
      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuance" aria-expanded={openSectionObj.issuance} aria-controls="collapse_issuance" onClick={()=>toggleWidget('issuance')}> {!openSectionObj.issuance ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Issuance </a> 
        </h5>
        <Collapse in={openSectionObj.issuance}>
          <div id="collapse_iissuance">
            <Issuance openWidget={openSection}/>
          </div>
        </Collapse>
      </div>

       <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.negotiatedRefunding} aria-controls="collapse_negotiated_refunding" onClick={()=>toggleWidget('negotiatedRefunding')}> {!openSectionObj.negotiatedRefunding ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Negotiated Refunding</a> 
        </h5>
        <Collapse in={openSectionObj.negotiatedRefunding}>
          <div id="collapse_negotiated_refunding">
            <NegotiatedRefunding openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.revenueBonds} aria-controls="collapse_revenueBonds" onClick={()=>toggleWidget('revenueBonds')}> {!openSectionObj.revenueBonds ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Revenue Bonds </a> 
        </h5>
        <Collapse in={openSectionObj.revenueBonds}>
          <div id="collapse_revenueBonds">
            <RevenuewBondsReason openWidget={openSection}/>
            </div>
        </Collapse>
      </div>

      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="issuer" aria-expanded={openSectionObj.contactInformation} aria-controls="collapse_contactInformation" onClick={()=>toggleWidget('contactInformation')}> {!openSectionObj.contactInformation ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Filing Contact </a> 
        </h5>
        <Collapse in={openSectionObj.contactInformation}>
          <div id="collapse_contactInformation">
            <ContactInformation openWidget={openSection}/>
            </div>
        </Collapse>
      </div> 
      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="comments" aria-expanded={openSectionObj.comments} aria-controls="collapse_comments" onClick={()=>toggleWidget('comments')}> {!openSectionObj.comments ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Comments</a> 
        </h5>
        <Collapse in={openSectionObj.comments}>
          <div id="collapse_comments">
            <Comments openWidget={openSection}/>
            </div>
        </Collapse>
      </div> 
      <div className="panel-heading" role="tab"> 
      	<h5 className="panel-title">
            <a id="review" aria-expanded={openSectionObj.review} aria-controls="collapse_review" onClick={()=>toggleWidget('review')}> {!openSectionObj.review ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Review</a> 
        </h5>
        <Collapse in={openSectionObj.review}>
          <div id="collapse_review">
            <PrivateSaleReasonReview openWidget={openSection}/>
            </div>
        </Collapse>
      </div> 
      </>
    );
}

export default CollapsibleWidgets
