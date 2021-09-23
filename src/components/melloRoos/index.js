import {useState} from 'react'
//import {useHistory} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import Card from '../ui/Card'
import AcknowledgementModal from './acknowledgementModal'

const MelloRoos = (props) => {
    const [openAcknowledgement, setOpenAcknowledgement] = useState(false);

    const cdiacNo = props.match.params.cdiac;
    //const history = useHistory();
    const handleSubmit = () => {
        setOpenAcknowledgement(true);
    }

    return (
        <Card>
            {/* <div><button>Back to Admin Home</button></div> */}
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab"> 
                        <div className="container">
                            <div className="panel-title">
                                <h1 className="main-title">Mello Roos Yearly Fiscal Status Report</h1>
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
            {openAcknowledgement && <AcknowledgementModal onModalClose={()=>setOpenAcknowledgement(false)} cdiacNo={cdiacNo}/>
            }
            
        </Card>
    )
}

export default MelloRoos
