import { Modal, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ContextModal = ({onModalClose, cdiacNo}) => {
    const history = useHistory();    

    const handleClick = () => {
        onModalClose();
        history.push('/mkr-local-obligors-yfs/'+cdiacNo);

    }

    return (
        <Modal show={true} onHide={onModalClose} backdrop="static" keyboard={false}  size="lg">
            <Modal.Header closeButton>
            <Modal.Title>MARKS ROOS YEARLY FISCAL STATUS REPORT FOR LOCAL OBLIGORS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="mb-10 mkr-context">
                <p>The following guidelines are provided by the California Debt and Investment Advisory Commission (“CDIAC” or the “Commission”) to implement the reporting requirements of Government Code Section 6599.1(b) of the Marks-Roos Local Bond Pooling Act of 1985, as amended (Sections 6584 et seq.) (the “Act”).</p>
                <p>Any joint powers authority (“Authority”) selling bonds pursuant to the Act, on or after January 1, 1996, which uses the proceeds of the Marks-Roos bonds to acquire one or more local obligation(s) or transfers funds to a local obligor under the terms of a debt contract between the Authority and the Local Obligor is required to report annually on the fiscal status of the local obligations acquired until the final maturity of the acquired local obligations. The report must be submitted to CDIAC no later than October 30 each year.</p> 
                <p>CDIAC has developed the Marks-Roos Yearly Fiscal Status Report for Local Obligors to standardize and facilitate reporting on the acquired local obligations. The annual report covers local obligations acquired under the Act between January 1, 1996 through June 30th of the reporting year and which are still outstanding as of the beginning of the fiscal reporting period.</p>
                <p>These instructions pertain to the reporting requirements for a local obligor under the Act. If the local obligor is also subject to annual reporting under Government Code Section 53359.5 (the Mello-Roos annual fiscal reporting requirement), a separate report must be submitted to satisfy reporting under that statute.</p>
                <p><b>Definitions used in these guidelines:</b></p>
                <p>Acquired local obligation (“LOB”) means the bonds of a local agency which were purchased with the proceeds of the Authority bonds or a loan made to a local agency with the proceeds of the Authority.</p>
                <p>Bonds, as defined in the Act (Government Code Section 6585(c)), means – (1) Bonds, including, but not limited to, assessment bonds, redevelopment bonds, government-issued mortgage bonds, and industrial development bonds; (2) Notes, including bonds, revenue, tax, or grant anticipation notes; (3) Commercial paper, floating rate and variable maturity securities, and any other evidence of indebtedness; and (4) Certificates of participation, capital lease or lease-purchase agreements.</p>
                <p>Date of Bond Issue/Loan means the date of mutual acceptance of the terms of the contract between the Authority and the local obligor.</p>
                <p>Final Maturity means the point at which the holders of the bonds have been fully repaid the principal amount of the bonds(s) plus accrued interest and redemption premium, if applicable.</p>
                <p>Fiscal Year or Fiscal Reporting Period means July 1st through June 30th annually.</p>
                <p>Local Obligor means the local agency whose bonds were purchased by the Authority or who received a loan from the Authority using the proceeds of the Authority bond sale or under the terms of a debt contract between the Authority and the local obligations.</p>
                <p><i><b>Reporting Year</b></i> means the year beginning July 1st through June 30th.</p>

                <h4>State Law</h4>
                <p>Section 6599.1(b) of the Government Code states that beginning January 1, 1996, and each year thereafter the sale of any bonds by the Authority for the purpose of acquiring local obligations, the legislative body shall, not later than October 30th of each year until the final maturity of the bonds, supply the following information to the Commission:</p>

                <ol>
                    <li>The principal amount of the bonds outstanding, both Authority bonds and local obligations with the proceeds of the Authority bonds.</li>
                    <li>The balance in the reserve fund.</li>
                    <li>The costs of issuance, including ongoing fees.</li>
                    <li>The total amount of administrative fees collected.</li>
                    <li>The amount of administrative fees charged to each local obligation.</li>
                    <li>The interest earnings and terms of all guaranteed investment contracts.</li>
                    <li>Commissions and fees paid on guaranteed investment contracts.</li>
                    <li>The delinquency rate on all local obligations.</li>
                    <li>The balance in capitalized interest accounts.</li>
                </ol>

                <h4>General Guidelines</h4>
                <p>A Yearly Fiscal Status report must be submitted for all local obligations acquired on or after January 1, 1996 through June 30th of the reporting year, the end of the fiscal reporting period. The report must be received no later than October 30th of the reporting year.</p>

                <p>In order to satisfy the annual reporting requirements of the Act, the Authority will receive a courtesy request to complete the Yearly Fiscal Status Report for Local Obligors from the Commission on or about August 1st of each year. The request will include all LOBs with a date of bond issue/loan prior to the end of the fiscal reporting period for the reporting year. A report on the status of each LOB outstanding as of the beginning of the reporting fiscal period must be submitted. Non receipt of this courtesy request does not relieve the Authority of the responsibility to report.</p>
               </div>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleClick()}>
                Go
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ContextModal
