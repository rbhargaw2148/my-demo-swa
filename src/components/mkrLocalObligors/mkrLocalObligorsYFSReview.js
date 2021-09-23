import{ Row, Col, Form } from 'react-bootstrap'
import {BiPrinter} from 'react-icons/bi'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Card from '../ui/Card'

const MKRLocalObligorsYFSReview = () => {
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
                    <h3>Marks Roos Yearly Fiscal Status Report For Local Obligors</h3>
                </div>
                <div className="col-sm-4 col-12">
                    <BiPrinter className="printBtn" onClick={printDocument}/>
                </div>
            </div>
            <div>
                <h3>Issuance</h3>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Issuer: </Form.Label></Col>
                        <Col md={8}>ABAG Finance Authority for Nonprofit Corporations CFD No 2004-2</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Issue Name: </Form.Label></Col>
                        <Col md={8}>Issue Name</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Project Name: </Form.Label></Col>
                        <Col md={8}>Windemere Ranch Series A</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Actual Sale Date: </Form.Label></Col>
                        <Col md={8}>06/05/2021</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h3>Fund Balance</h3>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Principal Amount of Bonds Outstanding: </Form.Label></Col>
                        <Col md={8}>0.00</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Bond Reserve Fund: </Form.Label></Col>
                        <Col md={8}>0.00</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Capitalized Interest Fund: </Form.Label></Col>
                        <Col md={8}>0.00</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Administrative Fee Charged by Authority: </Form.Label></Col>
                        <Col md={8}>0.00</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h3>Delinquent Reporting</h3>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Have Delinquent Taxes been reported?: </Form.Label></Col>
                        <Col md={8}>Yes</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Delinquent Parcel Information Reported as of Equalized Tax Roll of: </Form.Label></Col>
                        <Col md={8}>06/30/2016</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Delinquency Rate: </Form.Label></Col>
                        <Col md={8}>00.002333</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Does this agency participate in the County’s Teeter Plan? : </Form.Label></Col>
                        <Col md={8}>No</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Taxes Duw: </Form.Label></Col>
                        <Col md={8}>2392.22</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Taxes Unpaid : </Form.Label></Col>
                        <Col md={8}>1500.00</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h3>Retired Issues</h3>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Reason for Retirement: </Form.Label></Col>
                        <Col md={8}>Matured</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">Maturity Date: </Form.Label></Col>
                        <Col md={8}>07/31/2017</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h3>Filing Contact</h3>
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
                        <Col md={8}>915 Capital mall</Col>
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
                        <Col md={8}>916-222-3322</Col>
                    </Row>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">E-mail: </Form.Label></Col>
                        <Col md={8}>John.Doe@qualapps.com</Col>
                    </Row>
                </div>
            </div>
            <hr />
            <div>
                <h3>Comments</h3>
                <div>
                   <ul>
                       <li> comment 1</li><hr/>
                   </ul>

                </div>
            </div>
            </div>
        </Card>
    )
}

export default MKRLocalObligorsYFSReview
