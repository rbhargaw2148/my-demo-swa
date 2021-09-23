import Card from '../ui/Card'
import {Form, Row, Col, Button} from 'react-bootstrap'
import {BiPrinter} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const ProposedDebtReview = () => {
    //const proposedDebtDetails = JSON.parse(sessionStorage.getItem('ProposedSale'))

    const printDocument = () => {
        const input = document.getElementById('docReview');
        html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'JPEG', 0, 0);
          // pdf.output('dataurlnewwindow');
          pdf.save("download.pdf");
        })
      ;
    }
    return (
        <Card>
            <div className="form" id="docReview">
                <div className="row">
                    <div className="col-sm-8 col-12">
                        <h1>Proposed Debt Details</h1>
                    </div>
                    <div className="col-sm-4 col-12">
                        {/* <button style={{marginRight: "2rem"}} type="button" class="btn btn-primary pull-right">Review & Submit</button> */}
                        <BiPrinter className="printBtn" onClick={printDocument}/>
                    </div>
                </div>
                <div className="issuerSection">
                    <h3>Issuer</h3>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Issuer Name: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Issue Name: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Project Name: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Proposed Sale Date: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Principal to be Sold: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    
                </div>

                <div className="issuanceAuthorization">
                    <h3>Issuance Authorization</h3>
                    <div>
                        <h6>Authorization #1</h6>
                    <Row>
                        <Col md={4}><Form.Label className="fbold"> Original Authorized Amount: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Amount Authority Replenished (By this Issue): </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Authorization Date (MM/DD/YYYY): </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Amount Authority Reduced (By this Issue): </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Authorization Name: </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Net Reduction ot Increase (By this Issue): </Form.Label></Col>
                        <Col md={8}></Col>
                    </Row>
                    </div>
                </div>

                <div className="btn-div">
                <Link to="/dashboard/report-proposed-sale/upload-documents"><Button>Back</Button></Link>
                <Button className="fright" type="button" >Review & Submit</Button>
                </div>

            </div>
        </Card>
    )
}

export default ProposedDebtReview
