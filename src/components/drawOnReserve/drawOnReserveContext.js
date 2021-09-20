import React from 'react'
import {Modal} from 'react-bootstrap'
const DrawOnReserveContext = ({onModalClose}) => {
    return (
        <Modal show="true" backdrop="static" onHide={onModalClose}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body style={{fontSize: '14px'}}>
                        <div>
                            <div>
                                <p><strong>Mello-Roos Community Facilities Districts Draw on the Reserve Fund, Default, or Replenishment of Draw on Reserve (Voluntary Disclosure) Report</strong></p>
                                <p style={{fontSize: '14px'}}>Section 53359.5(c) of the Government Code requires that all agencies issuing Mello-Roos Community Facilities District bonds, regardless of when sold, notify the Commission by mail, postage prepaid, within 10 days if any of the following events occur:</p>
                                
                                <ol><li>the local agency or its trustee fails to pay principal and interest due on any scheduled payment date; or</li>
                                <li>funds are withdrawn from a reserve fund to pay principal and interest on the bonds that reduce the reserve to less than the reserve required.</li></ol>

                                <p style={{fontSize: '14px'}}>In 2011 CDIAC added the ability for agencies to voluntarily report the replenishment of a previous draw on reserve. To facilitate and provide consistency in reporting CDIAC has developed the Draw on Reserves/Default/Replenishment Form for Mello-Roos/Marks-Roos Issue.</p>

                                <ul>
                                <li>Draw on the Reserve Fund: Statute defines this as any withdrawals from the reserve fund to pay principal and/or interest payments that reduce the fund to less than the reserve requirement.</li>
                                <li>Default: Statute defines this as when an agency fails to pay principal and interest due on any scheduled payment date.</li>
                                <li>Replenishment (voluntary disclosure): The replenishment of monies previously drawn from the reserve fund.</li>
                                <li>The report shall consist of a letter to the Commission stating:
                                <ol>
                                <li>the community facilities district's name,</li>
                                <li>the bond issue title and original date of issue,</li>
                                <li>the type of event [draw on the reserve fund,  non-payment of principal and interest (default) or replenishment],</li>
                                <li>the date the draw on the reserve fund, non-payment or replenishment occurred, and</li>
                                <li>the amount of the draw on reserve fund, non-payment or replenishment to the reserve.</li>
                                </ol>
                                Issuers may include a statement of explanation containing information pertinent to the draw on reserve fund, default or replenishment (i.e., how the agency expects to address the issue, how the replenishment was accomplished, etc.).</li>
                                </ul>
                                Section 53359.5(d) of the Government Code provides that the legislative body and CDIAC are immune from liability for inadvertent errors in reporting under Section 53359.5.

                                Withdrawals from the reserve fund to make principal and/or interest payments that do not decrease the reserve fund below the reserve required need not be reported. Any agency that draws on the reserve fund below the reserve required or that fails to pay debt service must report to CDIAC each time such an event occurs. All agencies that issue Mello-Roos bonds, regardless of when sold, must comply with this reporting requirement.


                            </div>
                            <br/>
                            <div>
                                <p><strong>Marks-Roos Bond Pooling Act Participant Draw on Reserves, Default or Replenishment of Draw on Reserves (Voluntary Disclosure) Report</strong></p>
                                <p style={{fontSize: '14px'}}>Section 6599.1(c) of the Government Code requires that all agencies either issuing Marks-Roos bonds or agencies whose issues are purchased with the proceeds of a Marks-Roos bond issue, regardless of when sold, notify the Commission by mail, postage prepaid, within 10 days of any of the following events:</p>
                                    
                                <ol><li>The local agency or its trustee fails to pay principal and interest due on any scheduled payment date.</li>
                                <li>Funds are withdrawn from a reserve fund to pay principal and interest on the bonds issued by the authority or on any bonds acquired by the authority.</li></ol>

                                <p style={{fontSize: '14px'}}>Section 6599.1(d) of the Government Code provides that the legislative body and CDIAC are immune from liability for inadvertent errors in reporting under Section 6599.1.</p>

                                <p style={{fontSize: '14px'}}>In 2011, CDIAC added the ability for agencies to voluntarily report the replenishment of a previous draw on reserve. To facilitate and provide consistency in reporting CDIAC has developed the Draw on Reserves/Default/Replenishment Form for Mello-Roos/Marks-Roos Issue.</p>

                                <p style={{fontSize: '14px'}}>Draw on the Reserve Fund: Statute defines this as any withdrawal of funds from a reserve to pay principal and interest on the bonds issued by the authority or any bonds acquired by the authority.</p>

                                <p style={{fontSize: '14px'}}>Default: Statute defines this as non-payment or partial payment of principal and/or interest.</p>

                                <p style={{fontSize: '14px'}}>Replenishment of Draw on Reserve (Voluntary Disclosure) -  is defined as the replenishment of a previous draw on reserve.</p>

                                <p style={{fontSize: '14px'}}>The report shall consist of a letter to the Commission stating:</p>

                                <ol>
                                <li>the Authority's or the Local Obligation's issue name;</li>
                                <li>the bond issue title and original date of sale;</li>
                                <li>the project name;</li>
                                <li>the type of event [non-payment of principal and interest (default), draw on the reserve fund, or replenishment];</li>
                                <li>the date the default, draw on the reserve fund, or replenishment occurred;</li>
                                <li>the amount of the default, draw on the reserve fund, or replenishment; and</li>
                                <li>contact information</li>
                                </ol>
                                <p style={{fontSize: '14px'}}>Issuers may include a statement of explanation containing information pertinent to the draw on reserve fund, default or replenishment (i.e., how the agency expects to address the issue, how the replenishment was accomplished, etc.).</p>

                                <p style={{fontSize: '14px'}}><b>All</b> Authorities and local obligors that issue bonds or receive loans, <b>regardless of when sold</b>, must report.</p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary"onClick={()=>onModalClose()}>Close</button>
                    </Modal.Footer>
                </Modal>
    )
}

export default DrawOnReserveContext
