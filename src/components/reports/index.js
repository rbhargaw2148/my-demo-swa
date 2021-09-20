import {useState, useEffect} from 'react'
import {Dropdown} from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import FinalSaleReports from './finalSaleReports'
import ProposedDebtReports from './proposedDebtReports'

const Reports = (props) => {
    const reportType = props.match.params.reportType;
    
    const history = useHistory();
    const {pathname} = useLocation()

    const openReport = (reportId) => {
        console.log(pathname);
        history.push(pathname+'/'+reportId)
    }

    return (
        <div>
            {reportType === 'proposed-sale' && <ProposedDebtReports /> }
            {reportType === 'final-sale' && <FinalSaleReports /> }
        </div>
    )
}

export default Reports
