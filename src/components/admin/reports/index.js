import { Table, Form } from 'react-bootstrap';
import {useState} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Card  from '../../ui/Card'
import ReportsDetails from './reportsDetails';
const AdminReports = () => {
    const history = useHistory();
    const {pathname} = useLocation();
    const [debtItemList, setDebtItemList] = useState(null);
    const [selectedDebtGroup, setSelectedDebtGroup] = useState(null);

    // const Notes = {
    //     "BAN":"Bond anticipation note",
    //     "CRN":"Conduit revenue note",
        
    // }

    const reportGroups = [{
        code: 'RG1',
        desc: 'Report Group 1'
    },
    {
        code: 'RG2',
        desc: 'Report Group 1'
    },
    {
        code: 'RG3',
        desc: 'Report Group 3'
    },
    {
        code: 'RG4',
        desc: 'Report Group 4'
    },
    {
        code: 'RG5',
        desc: 'Report Group 5'
    }]

    const handleChange = (e) => {
        let debtType = e.target.value;
        setSelectedDebtGroup(debtType);
    }

    const showDetails = (code) => {
        history.push(pathname+'/'+code);
    }

    return (

        <Card>
            <div className="form">
                <h1>Reports</h1>

                <div>
                    <label>Report Group: </label>
                <Form.Select as="select" onChange={(e)=>handleChange(e)} value={selectedDebtGroup}>
                        <option>select</option>
                        
                        {reportGroups.map((item, i) =>{
                            return (<option key={i} value={item.code} >{item.desc}</option>);
                        }
                        ) }
                </Form.Select>
                </div>
<br/>
                {selectedDebtGroup && <ReportsDetails />}
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

export default AdminReports
