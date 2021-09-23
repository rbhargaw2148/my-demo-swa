import Card from '../ui/Card'
import{ Button, Row, Col, Form } from 'react-bootstrap'
import {BiPrinter} from 'react-icons/bi'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const privateSaleReasonReview = () => {
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
                    <h3>Report of Private Sale Reason</h3>
                </div>
                <div className="col-sm-4 col-12">
                    <BiPrinter className="printBtn" onClick={printDocument}/>
                </div>
            </div>
            <div>
                <h4>Issuance</h4>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">CDIAC Number: </Form.Label></Col>
                        <Col md={8}><span>2021-0019</span></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Issuer: </Form.Label></Col>
                        <Col md={8}>City of Sacramento</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Issue Name: </Form.Label></Col>
                        <Col md={8}>Issue Name</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Project Name: </Form.Label></Col>
                        <Col md={8}>Project Name</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Actual Sale Date: </Form.Label></Col>
                        <Col md={8}>06/05/2021</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h4>Reason for Negotiated Refunding</h4>
                <ul style={{listStyleType:'auto'}}>
                    <li>More cost saving were expected to be realized than a public sale</li>
                </ul>
            </div>
            <hr />
            <div>
                <h4>Reason for Revenue Bonds</h4>
                <ul style={{listStyleType:'auto'}}>
                    <li>More cost saving were expected to be realized than a public sale</li>
                    <li>Issuer able to work with participants familiar with issue/r than a public sale</li>
                </ul>
            </div>
            <hr />
            <div>
                <h4>Filing Contact</h4>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Filing Contact Name: </Form.Label></Col>
                        <Col md={8}><span>2021-0019</span></Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Agency/Organization Name: </Form.Label></Col>
                        <Col md={8}>City of Sacramento</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Address: </Form.Label></Col>
                        <Col md={8}>919 Capital mall</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">City: </Form.Label></Col>
                        <Col md={8}>Sacramento</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">State: </Form.Label></Col>
                        <Col md={8}>CA</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Zip Code: </Form.Label></Col>
                        <Col md={8}>95722</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Telephone: </Form.Label></Col>
                        <Col md={8}>916-274-9834</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Fax Number: </Form.Label></Col>
                        <Col md={8}>916-111-1222</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">E-mail: </Form.Label></Col>
                        <Col md={8}>John.Doe@qualapps.com</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h4>Comments</h4>
                <div>
                   <ul>
                       <li> comment 1</li>
                   </ul>

                </div>
            </div>
            
            <div className="btn-div">
                <Button>Back</Button>
                <Button className="fright">Review & Submit</Button>
            </div>
            </div>
        </Card>
    )
}

export default privateSaleReasonReview
