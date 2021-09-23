//import { useHistory, useLocation } from 'react-router-dom'
import FinalSaleReports from './finalSaleReports'
import ProposedDebtReports from './proposedDebtReports'

const Reports = (props) => {
    const reportType = props.match.params.reportType;
    const status = props.match.params.type;
    
    // const history = useHistory();
    // const {pathname} = useLocation()

    // const openReport = (reportId) => {
    //     console.log(pathname);
    //     history.push(pathname+'/'+reportId)
    // }

    return (
        <div>
            {reportType === 'proposed-sale' && <ProposedDebtReports status={status}/> }
            {reportType === 'final-sale' && <FinalSaleReports status={status}/> }
        </div>
    )
}

export default Reports
