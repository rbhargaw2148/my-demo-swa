import { Table } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom'
import Card  from '../ui/Card'
const CodeMaintenance = () => {
    const history = useHistory();
    const {pathname} = useLocation();
    const codes = [{
        code: 'CMNT',
        desc: 'Comment Types'
    },
    {
        code: 'DEBTG',
        desc: 'Debt Groups'
    },
    {
        code: 'DOCT',
        desc: 'Document Types for Uploading'
    }]

    const showDetails = (code, desc) => {
        history.push({pathname: pathname+'/'+code, groupVal: desc });
    }

    return (

        <Card>
            <div className="form">
                <h1>Code Maintenance</h1>

                <Table bordered striped>
                    <tbody>
                    {codes.map((item, i) => {
                    return <tr key={i} style={{cursor: 'pointer'}} onClick={()=>showDetails(item.code, item.desc)}><td>{item.desc}</td></tr>
                    })}
                    </tbody>
                </Table>
            {/* <ul style={{listStyle: 'none'}}>
                {codes.map((item, i) => {
                    return <li key={i} style={{cursor: 'pointer'}} onClick={()=>showDetails(item.code)}>{item.desc}</li>
                })}
            </ul> */}
            </div>
        </Card>
    )
}

export default CodeMaintenance
