import {useState} from 'react'
import Card from '../ui/Card'
import { FiPlusCircle, FiMinusCircle} from 'react-icons/fi'
import {Form, Table, Button, Modal} from 'react-bootstrap'
import {AiFillQuestionCircle} from 'react-icons/ai'

const Foreclosure = (props) => {
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    const [foreclosures, setForeclosures] = useState([
        {
            foreclosureDate: '',
            numberOfParcels: '',
            totalAmountOfTax: ''
        }
    ]);

    const addForeclosure = () => {
        let foreclosuresArray = [...foreclosures, {
            foreclosureDate: '',
            numberOfParcels: '',
            totalAmountOfTax: ''
        }];
       
        setForeclosures(foreclosuresArray);
    }

    const removeForeclosure = (i) => {
        let foreclosuresArray = [...foreclosures];

        if( foreclosuresArray.length === 1) {
            foreclosuresArray[0].foreclosureDate = ""
            foreclosuresArray[0].numberOfParcels = ""
            foreclosuresArray[0].totalAmountOfTax = ""
        } else {
            foreclosuresArray.splice(i,1)
        }
        setForeclosures(foreclosuresArray);
    }

    const validateForm = () => {
        props.openWidget('retiredIssues');
    }

    return (
        <Card>
            <div className="form">
                <h1>Foreclosure Information for Fiscal  Year <AiFillQuestionCircle onClick={()=>setShowInstructionsModal(true)} className="help-icon heading-help-icon"/>

                {showInstructionsModal && 
                <Modal show={true} backdrop="static" onHide={()=>setShowInstructionsModal(false)}>
                    {/* <Modal.Header closeButton><h3>Issuance Authorization</h3></Modal.Header> */}
                    <Modal.Body>
                        <div>
                            <span>Foreclosure commences on the date the CFD agency notifies the property owner of the foreclosure. Issuers should report the date foreclosure commenced on any parcel(s), the number of foreclosed parcels and the total dollar amount of taxes due for foreclosures for that date. Report all foreclosures by date for the fiscal year.</span>
                            
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={()=>setShowInstructionsModal(false)}>Close</button>
                    </Modal.Footer>
                </Modal>
                }</h1>
                <span>(Aggregate totals, if foreclosures commenced on same date)</span>

                <div>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Date Foreclosure Commenced</th>
                                <th>Total Number of Foreclosure Parcels</th>
                                <th>Total Amount of Tax on Foreclosure Parcels</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {foreclosures.map((item, i) => {
                            return (<tr id={i+1} key={Math.random()}>
                                <td>
                                    <Form.Control type="date" />
                                </td>
                                <td>
                                    <Form.Control type="text" />
                                </td>
                                <td>
                                    <Form.Control type="text" />
                                </td>
                                <td>
                                    <span className="btn-link add-row"><FiPlusCircle onClick={()=>addForeclosure()}/></span>
                                    <span className="btn-link delete-row"><FiMinusCircle onClick={()=>removeForeclosure(i)}/></span>
                                </td>
                            </tr>
                            )
                        })
                        }
                        </tbody>
                    </Table>
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>
            </div>
        </Card>
    )
}

export default Foreclosure
