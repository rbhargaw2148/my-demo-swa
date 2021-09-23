//import {useState} from 'react'
import { Modal, Button} from 'react-bootstrap'
import classes from './reportProposedSale.module.css'
//import { useHistory } from 'react-router-dom'

const ProposedSaleContextModal = ({onModalClose}) => {
    return (
        <Modal show={true} onHide={onModalClose} backdrop="static" keyboard={false}  size="lg">
            <Modal.Header closeButton>
            <Modal.Title>REPORT OF PROPOSED DEBT ISSUANCE (RPDI)</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modalbody}>
               <div>
                    
                   <p> The requirements for the submittal of the RPDI are included in Government Code section 8855(i) and CCR Title 4, §6010 – §6014.</p>

                   <p> The regulations added a few new data elements and some procedural clarifications. </p>
                <ul>
                    <li>The report will ask for the amount of the principal, specifically, that will be used to redeem, refund, pay-down, or refinance other debt of the issuer. [Refer to §6010(g)] </li>

                    <li>Issuers must indicate if there is an intention to repay the debt with currency other than US dollars. [Refer to §6010(h)]</li>

                    <li>If the issue is a voter-approved general obligation debt, issuers must provide information about the authorizing election, the amount authorized, and the amount of the proposed issue charged against the reported authority. [Refer to §6010(i)] </li>

                    <li>Of the purposes for the debt issuance indicated, issuers will provide the approximate percentage applied to each purpose. [Refer to §6010(u)]</li>

                    <li>A proposed issue of commercial paper notes must be reported to CDIAC as soon as the decision is made to issue the notes. Further, the report is not required to be submitted if the issue is used entirely to repay other commercial paper notes of the issuer. [Refer to §6012] </li>

                    <li>A report is required for each draw from a line of credit. The report must be submitted 30 days prior to the settlement date or upon the decision if the decision is made less than 30 days prior to settlement of the draw. [Refer to §6013] </li>
                   </ul>
               </div>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={onModalClose}>
                Close
            </Button>
            {/* <Button variant="primary" disabled={btnDisabled} onClick={handleSubmit}>
                Submit
            </Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default ProposedSaleContextModal
