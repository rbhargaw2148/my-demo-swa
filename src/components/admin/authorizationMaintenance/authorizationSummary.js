import { Modal, Table} from 'react-bootstrap'

const AuthorizationSummary = (props) => {
    const {onModalClose} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Authorization Summary</h3></Modal.Header>
            <Modal.Body>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Fiscal Year</th>
                            <th>Replenished Amount</th>
                            <th>During Amount</th>
                            <th>Principal Reduced Amount</th>
                            <th>Lapsed Amount</th>
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

export default AuthorizationSummary
