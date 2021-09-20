import {Card, Table} from 'react-bootstrap'
import {Link, useHistory} from'react-router-dom'

const DashboardWidget = (props) => {
    const {title, newReportLink, linkTo, reports} = props;
    const history = useHistory();

    const handleClick = (e, type) => {
        e.preventDefault();
        let actions = null;
        let pathName = "#";
        if(title === "Report of Proposed Debt") {
            actions = [
                {value:'CI', label: 'Cancel Issue'},
                {value:'CFS', label: 'Create Final Sale'}
            ]
            pathName = `/proposed-sale/reports/${type}`
        } else if(title==="Report of Final Sale") {
            actions=[
                {value:'CI', label: 'Cancel Issue'},
                {value:'CFS', label: 'Mello Roos'}
            ]
            pathName = `/final-sale/reports/${type}`
        }

        // const location = {pathname:`/reports/${type}`};
        history.push(pathName);
    }
    return (
        <Card variant="light" className="bg-white shadow-sm mb-4 widget" >
            <Card.Header className="text-center">{title} </Card.Header>

            <Card.Body>
            <Table size="sm">
                <tbody>
                    {Object.keys(reports).length != 0 && Object.entries(reports).map(([type, count] )=> {
                        return <tr key={Math.random()}>
                            <td>{type}</td>
                            <td><a href="#" onClick={(e)=>handleClick(e, type)}>{count}</a></td>
                        </tr>
                    })}
                </tbody>
            </Table>
            </Card.Body>
            {linkTo && 
            <Card.Footer className="text-center"><a href="#" onClick={(e)=>newReportLink(e, linkTo)}>New Report</a></Card.Footer>
            }
            </Card>
    )
}

export default DashboardWidget
