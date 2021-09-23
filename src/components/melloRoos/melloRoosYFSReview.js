import{ Row, Col, Form } from 'react-bootstrap'
import {BiPrinter} from 'react-icons/bi'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Card from '../ui/Card'

const MelloRoosYFSReview = () => {
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
                    <h3>Mello Roos Yearly Fiscal Status Report</h3>
                </div>
                <div className="col-sm-4 col-12">
                    <BiPrinter className="printBtn" onClick={printDocument}/>
                </div>
            </div>
            <div>
                <h3>Issuance</h3>
                <div>
                    <Row>
                        <Col md={4}><Form.Label className="fbold">CDIAC Number: </Form.Label></Col>
                        <Col md={8}><span>2019-0001</span></Col>
                    </Row>
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
            </div>
        </Card>
    )
}

export default MelloRoosYFSReview
