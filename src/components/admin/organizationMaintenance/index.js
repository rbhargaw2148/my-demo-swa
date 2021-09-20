import { Table, Form, Row, Col } from 'react-bootstrap'
import {useState} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Card  from '../../ui/Card'
import Select from 'react-select'
import SearchResultContainer from './searchResultContainer'
const OrganizationMaintenance = () => {
    const [showSearchResult, setShowSearchResult] = useState(false);
    return (

        <Card>
            <div className="form">
                <h1>Organization Maintenance</h1>

                <Row>
                    <Col>
                <div className="control">
                    <label>Org ID: </label>
                    <input type="text"/>
                </div>
                </Col>
                <Col>
                <div className="control">
                    <label>Name: </label>
                    <input type="text"/>
                </div>
                </Col>
                <Col>
                <div className="control">
                    <label>Short Name: </label>
                    <input type="text"/>
                </div>
                </Col>
                <Col>
                <div className="control">
                    <label>Division: </label>
                    <Select />
                </div>
                </Col>
                </Row>
                <Row>
                <Col>
                    <div className="control">
                        <label>Type: </label>
                        <Select />
                    </div>
                </Col>
                <Col>
                    <div className="control">
                        <label>Type Description: </label>
                        <Select />
                    </div>
                </Col>
                <Col><div style={{marginTop: '10px'}}><input type="checkbox"/> Active</div></Col>

                </Row>
                <div style={{overflow: 'auto'}}>
                    <button style={{float: 'right'}}type="button" onClick={()=>setShowSearchResult(true)}>Search</button>
                </div>
            </div>  

            {showSearchResult && <SearchResultContainer />}          
        </Card>
    )
}

export default OrganizationMaintenance
