import {Card, Table} from 'react-bootstrap'
import {useHistory} from'react-router-dom'

const DashboardWidget = (props) => {
    const {title, newReportLink, linkTo, reports} = props;
    const history = useHistory();

    const handleClick = (e, type) => {
        e.preventDefault();
        let pathName = "#";
        if(title === "Report of Proposed Debt") {
            pathName = `/proposed-sale/reports/${type}`
        } else if(title==="Report of Final Sale") {
            pathName = `/final-sale/reports/${type}`
        }

        history.push(pathName);
    }
    return (
        <Card variant="light" className="bg-white shadow-sm mb-4 widget" >
            <Card.Header className="text-center">{title} </Card.Header>

            <Card.Body>
            <Table size="sm">
                <tbody>
                    {Object.keys(reports).length !== 0 && Object.entries(reports).map(([type, count] )=> {
                        return <tr key={Math.random()}>
                            <td>{type}</td>
                            <td>
                                <button
                                type="button"
                                className="link-button"
                                onClick={(e)=>handleClick(e, type)}>{count}
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
            </Card.Body>
            {linkTo && 
                <Card.Footer className="text-center">
                <button
                type="button"
                className="link-button" 
                onClick={(e)=>newReportLink(e, linkTo)}>New Report</button>
                </Card.Footer>
            }
            </Card>
    )
}

export default DashboardWidget
