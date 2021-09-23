import { Modal, Row, Col} from 'react-bootstrap'

const EditFeeForm = (props) => {
    const {onModalClose, feeInfo} = props;
    return (
        <Modal show={true} backdrop="static" onHide={onModalClose}>
            <Modal.Header closeButton><h3>Edit Fee</h3></Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                        <div className="control">
                            <label><span className="required">* </span>Effective Start Date: </label>
                            <input defaultValue={feeInfo.effectiveStartDate}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <label><span className="required">* </span>Effective End Date: </label>
                            <input defaultValue={feeInfo.effectiveEndDate}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <label><span className="required">* </span>Minimum Amount: </label>
                            <input defaultValue={feeInfo.minAmount}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="control">
                            <label><span className="required">* </span>Maximum Amount: </label>
                            <input defaultValue={feeInfo.maxAmount}/>
                        </div>
                    </Col>
                </Row>
                <div>
                    <h5>Fees and Invoice Description</h5>
                    <Row>
                    <Col>
                    <label>Short-term Fee</label>
                    <div className="control"><input defaultValue={`$`+feeInfo.minAmount+`.00`}/></div>
                    </Col>
                    <Col>
                    <label>Description</label>
                    <div className="control"><input /></div>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <label>Basis Points Rate</label>
                    <div className="control"><input defaultValue="0.00000"/></div>
                    </Col>
                    <Col>
                    <label>Description</label>
                    <div className="control"><input /></div>
                    </Col>
                    </Row>
                    <Row>
                    
                    <Col>
                    <label>Maximum Fee</label>
                    <div className="control"><input defaultValue={`$`+feeInfo.maxAmount+`.00`}/></div>
                    </Col>
                    <Col>
                    <label>Description</label>
                    <div className="control"><input /></div>
                    </Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="custom-button-secondary  btn-secondary" onClick={onModalClose}>Cancel</button>
                <button className="custom-button">Save</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditFeeForm
