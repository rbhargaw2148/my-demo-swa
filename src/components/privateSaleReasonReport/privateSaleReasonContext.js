import React from 'react'
import {Modal} from 'react-bootstrap'
const PrivateSaleReasonContext = ({onModalClose}) => {
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <div>
                                <p><strong>Reason for Negotiated Refunding / Reason for Negotiated Sale of
                                Revenue Bonds Report.</strong></p>
                            
                                <p>Section 53583(c)(B) and 54418 of the California Government Code
Provisions Applicable to All Refunding Bonds of All Local Agencies (53580-53589.5)</p>
<p>Section 54418 of the California Government Code
Provisions Relating to Bonds (54400-54435)</p>
<p>If any amount of the Principal is used to refund, redeem, or refinance other Debt, or the
Debt type was revenue bonds as defined under Government Code 54313, and a Private
Sale method was used instead of a Public Sale method, the reasons why the Issuer
decided to use the selected Private Sale method. The local agency shall send a written
statement, within two weeks after the bonds are sold to the California Debt Advisory
Commission explaining the reasons why the local agency determined to sell the bonds
at private sale or on a negotiated sale basis instead of at public sale. Furnishing this
information on the Report of Final Sale shall meet the requirements of a written
statement pursuant to Government Code sections 53583(c)(2)(B) and 54418 provided
the Report of Final Sale is submitted to the Commission within the timeframe
established under Government Code sections 53583(c)(2)(B) and 54418.</p></div>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary"onClick={()=>onModalClose()}>Close</button>
                    </Modal.Footer>
                </Modal>
    )
}

export default PrivateSaleReasonContext
