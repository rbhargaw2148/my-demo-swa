import React from 'react'
import Card from '../ui/Card'
import {Card as BsCard, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Admin = () => {
    return (
        <Card>
            <div className="form">
            <h1>Admin</h1>
            <hr />
            <Row className="justify-content-md-center">
                <Col xs={12} sm={6} xl={4} className="mb-4">
                    <BsCard variant="light" className="bg-white shadow-sm mb-4 admin-widget" >
                        <BsCard.Header className="text-center">Code Maintenance</BsCard.Header>

                        <BsCard.Body>
                            <ul style={{listStyle: 'none'}}>
                                <li><Link to="/admin/code-maintenance">System Code Maintenance</Link></li>
                                <li><Link to="/admin/debt-instrument-maintenance">Debt Instrument Maintenance</Link></li>
                                <li><Link to="/admin/financing-purpose-maintenance">Financial Purpose Maintenance</Link></li>
                                <li><Link to="/admin/county-maintenance">County Maintenance</Link></li>
                            </ul>
                        </BsCard.Body>
                    </BsCard>
                </Col>

                <Col xs={12} sm={6} xl={4} className="mb-4">
                    <BsCard variant="light" className="bg-white shadow-sm mb-4 admin-widget" >
                        <BsCard.Header className="text-center">Reports</BsCard.Header>

                        <BsCard.Body>
                            <ul style={{listStyle: 'none'}}>
                                <li><Link to="/admin/reports">Reports</Link></li>
                            </ul>
                        </BsCard.Body>
                    </BsCard>
                </Col>

                <Col xs={12} sm={6} xl={4} className="mb-4">
                    <BsCard variant="light" className="bg-white shadow-sm mb-4 admin-widget" >
                        <BsCard.Header className="text-center">Other</BsCard.Header>

                        <BsCard.Body>
                            <ul style={{listStyle: 'none'}}>
                                <li><Link to="/admin/organization-maintenance">Org/Contact Maintenance</Link></li>
                                <li><Link to="/admin/authorization-maintenance">Authorization Maintenance</Link></li>
                                <li><Link to="#">Fee Schedule Maintenance</Link></li>
                            </ul>
                        </BsCard.Body>
                    </BsCard>
                </Col>
                
            </Row>
            </div>
        </Card>
    )
}

export default Admin
