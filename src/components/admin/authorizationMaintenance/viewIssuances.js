import {Form, Modal, Table} from 'react-bootstrap'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'

const ViewIssuances = (props) => {
    const {onModalClose, groupValue} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>View Issuances</h3></Modal.Header>
            <Modal.Body>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>CDIAC #</th>
                            <th>Issue Name</th>
                            <th>Principal SaleAmount</th>
                            <th>Actual Sale Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="custom-button-secondary  btn-secondary" onClick={onModalClose}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewIssuances
