import React from 'react'
import {Modal} from 'react-bootstrap'
const History = ({onModalClose}) => {
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>History</h3></Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
            <button variant="secondary"onClick={()=>onModalClose()}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default History