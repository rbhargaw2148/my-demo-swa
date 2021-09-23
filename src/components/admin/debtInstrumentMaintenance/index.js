import { Form } from 'react-bootstrap';
import {useState} from 'react'
//import { useLocation, useHistory } from 'react-router-dom'
import Card  from '../../ui/Card'
import DebtDetails from './debtDetails';
const DebtInstrumentMaintenance = () => {
    // const history = useHistory();
    // const {pathname} = useLocation();
    //const [debtItemList, setDebtItemList] = useState(null);
    const [selectedDebtGroup, setSelectedDebtGroup] = useState(null);

    // const Notes = {
    //     "BAN":"Bond anticipation note",
    //     "CRN":"Conduit revenue note",
        
    // }

    const debtGroups = [{
        code: 'N',
        desc: 'Notes'
    },
    {
        code: 'B',
        desc: 'Bonds'
    },
    {
        code: 'OTH',
        desc: 'Other'
    },
    {
        code: 'CP',
        desc: 'Commercial Paper'
    },
    {
        code: 'COP',
        desc: 'Certificate of Participation/Leases'
    }]

    const handleChange = (e) => {
        let debtType = e.target.value;
        setSelectedDebtGroup(debtType);
        // switch (debtType) {
        //     case "notes":
        //         setDebtItemList(Notes);
        //         break;
        //     case "bonds":
        //         setDebtItemList(Bonds);
        //         break;
        //     case "other":
        //         setDebtItemList(Other);
        //         break;
        //     case "commercial_paper":
        //         setDebtItemList(Commercial_Paper);
        //         break;
        //     case "certification_of_participation":
        //         setDebtItemList(Certification_Of_Participation);
        //         break;
        //     default:
        //         setDebtItemList(null);
        // }
    }

    // const showDetails = (code) => {
    //     history.push(pathname+'/'+code);
    // }

    return (

        <Card>
            <div className="form">
                <h1>Debt Instrument Maintenance</h1>

                <div>
                    <label>Debt Group: </label>
                <Form.Select as="select" onChange={(e)=>handleChange(e)} value={selectedDebtGroup}>
                        <option>select</option>
                        
                        {debtGroups.map((item, i) =>{
                            return (<option key={i} value={item.code} >{item.desc}</option>);
                        }
                        ) }
                </Form.Select>
                </div>

                {selectedDebtGroup && <DebtDetails />}
                {/* <Table bordered striped>
                    <tbody>
                    {debtTypes.map((item, i) => {
                    return <tr key={i} style={{cursor: 'pointer'}} onClick={()=>showDetails(item.code)}><td>{item.desc}</td></tr>
                    })}
                    </tbody>
                </Table> */}
            </div>
            
        </Card>
    )
}

export default DebtInstrumentMaintenance
