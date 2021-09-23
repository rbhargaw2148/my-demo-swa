import {useState} from 'react'
//import {useHistory} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import Card from '../ui/Card'
import ContextModal from './contextModal'
const MKRLocalObligors = (props) => {
    const [openContextModal, setOpenContextModal] = useState(false);

    const cdiacNo = props.match.params.cdiac;
    //const history = useHistory();
    const handleSubmit = () => {
        setOpenContextModal(true);
    }


    return (
        <Card>
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab"> 
                        <div className="container">
                            <div className="panel-title">
                                <h1 className="main-title">Marks Roos Yearly Fiscal Status Report For Local Obligors</h1>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body" style={{padding: '10px 0'}}>
                        <div className="container">
                            <div>
                            <Row>
                                <Col>
                                    <div>
                                        <label> CDIAC #: </label>
                                        <input type="text" defaultValue={cdiacNo} disabled/>
                                    </div>
                                    <div>
                                        <label><span className="required">* </span>Balances Reported as of June 30, <input type="text" /></label>
                                    </div>
                                </Col>
                            </Row>
                            </div>

                            <div style={{overflow: 'auto'}}>
                                <button style={{float: 'right'}}type="button" onClick={(e)=>handleSubmit(e)}>Submit</button>
                            </div>
                        </div>
                    </div>

                

                </div>
            </div>
            {/* {showSearchResult && <SearchResultContainer />}           */}
            {openContextModal && <ContextModal onModalClose={()=>setOpenContextModal(false)} cdiacNo={cdiacNo}/>
            }
            
        </Card>
    )
}

export default MKRLocalObligors
