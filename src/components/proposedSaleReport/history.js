import React from 'react'
import {Modal, Table} from 'react-bootstrap'
const History = ({onModalClose}) => {
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>History</h3></Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>05/06/2017</td>
                            <td>Draft</td>
                            <td><button type="button" className="dk-blue-color link-button">PDF</button></td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            <button variant="secondary"onClick={()=>onModalClose()}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default History