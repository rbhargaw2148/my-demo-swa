import { Row, Col } from 'react-bootstrap';
import {useState} from 'react'
import Card  from '../../ui/Card'
import Select from 'react-select'
import SearchResultContainer from './searchResultContainer'
const AuthorizationMaintenance = () => {
    // const history = useHistory();
    // const {pathname} = useLocation();
    const [showSearchResult, setShowSearchResult] = useState(false);
    
    
    const origins = [
        {value:"E", label:"Elections"},
        {value:"I", label:"Issues"}
    ]

    // const showDetails = (code) => {
    //     history.push(pathname+'/'+code);
    // }

    return (

        <Card>
            {/* <div><button>Back to Admin Home</button></div> */}
            <div className="form">
                <h1>Authorization Maintenance</h1>

                <Row>
                    <Col>
                <div className="control">
                    <label>Organization Name: </label>
                    <input type="text"/>
                </div>
                </Col>
                <Col>
                <div className="control">
                    <label>Authorization Name: </label>
                    <input type="text"/>
                </div>
                </Col>
                <Col>
                <div className="control">
                    <label>Origin: </label>
                    <Select options={origins}/>
                </div>
                </Col>
                </Row>

                
                <div style={{overflow: 'auto'}}>
                    <button style={{float: 'right'}}type="button" onClick={()=>setShowSearchResult(true)}>Search</button>
                </div>
            </div>
            {showSearchResult && <SearchResultContainer />}          

            
        </Card>
    )
}

export default AuthorizationMaintenance
