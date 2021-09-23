//import {useState} from 'react'
import { Collapse } from "react-bootstrap"
import Issuance from './issuance'
import Draw from './draw'
// import RevenuewBondsReason from './revenueBondsReason'
import FilingContact from './filingContact'
import Comments from './comments'
import DrawOnReserveReview from './drawOnReserveReview'
import {FaPlus, FaMinus} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const CollapsibleWidgets = ({openSectionObj, toggleWidget, openSection}) => {
  
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
            id="draw" aria-expanded={openSectionObj.draw} aria-controls="collapse_draw" onClick={()=>toggleWidget('draw')}> {!openSectionObj.draw ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Draw</button> 
        </h5>
        <Collapse in={openSectionObj.draw}>
          <div id="collapse_draw">
            <Draw openWidget={openSection}/>
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
            id="filingContact" aria-expanded={openSectionObj.filingContact} aria-controls="collapse_filingContact" onClick={()=>toggleWidget('filingContact')}> {!openSectionObj.filingContact ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Filing Contact </button> 
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
            id="comments" aria-expanded={openSectionObj.comments} aria-controls="collapse_comments" onClick={()=>toggleWidget('comments')}> {!openSectionObj.comments ? <FaPlus className="icon-style"/> : <FaMinus className="icon-style"/>}&nbsp; Comments </button> 
        </h5>
        <Collapse in={openSectionObj.comments}>
          <div id="collapse_comments">
            <Comments openWidget={openSection}/>
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
            <DrawOnReserveReview openWidget={openSection}/>
            </div>
        </Collapse>
      </div>
      </div>
      </>
    );
}

export default CollapsibleWidgets
