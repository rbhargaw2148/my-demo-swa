import { Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Issuer from './components/issuer/index'
import Layout from './components/layout/Layout'
// import IssuerContact from './components/issuerContact/index'
// import FilingContact from './components/filingContact/index'
// import RetiredIssues from './components/retiredIssues/index'
// import InterestDebtExempt from './components/interestDebtExempt/index'
// import TypeOfSale from './components/typeOfSale/index'
// import FinancingPrivatePlacement from './components/financingPrivatePlacement/index'
// import DebtPolicy from './components/debtPolicy/index'
// import TypeOfDebt from './components/typeOfDebt/index'
// import SourceOfRepayment from './components/sourceOfRepayment/index'
// import PurposeOfFinancing from './components/purposeOfFinancing/index'
// import IssuanceAuthorization from './components/issuanceAthorization'
// import Statutory from './components/statutories'
// import ProposedDebtReview from './components/proposedDebtReview/index'
// import DocumentUpload from './components/documentUpload/index'
import Dashboard from './components/dashboard/index'
import ProposedSaleReport from './components/proposedSaleReport'
import FinalSaleReport from './components/finalSaleReport'
import Reports from './components/reports'
import CodeMaintenance from './components/codeMaintenance'
import CodeDetails from './components/codeMaintenance/codeDetails'
import DebtInsMaintenance from './components/admin/debtInstrumentMaintenance'
import FinancingPurposeMaintenance from './components/admin/financingPurposeMaintenance'
import CountyMaintenance from './components/admin/countyMaintenance'
import OrganizationMaintenance from './components/admin/organizationMaintenance'
import AuthorizationMaintenance from './components/admin/authorizationMaintenance'
import OrgDetails from './components/admin/organizationMaintenance/orgDetails'
import AdminReports from './components/admin/reports'
import DebtDetails from './components/admin/debtInstrumentMaintenance/debtDetails'
import Admin from './components/admin'
import PrivateSaleReasonReport from './components/privateSaleReasonReport'
//import ViewReport from './components/reports/viewReport'
import { rootPath, dashboardPath, reportProposedSalePath, 
  reportFinalSalePath, reportPrivateSaleResonPath, drawOnReservePath } from './Routes'
import DrawOnReserve from './components/drawOnReserve'

function App() {
  return (
    <>
      <Switch>
      <Route path={rootPath} exact component={Login} />
      <Layout>
        {/* <Route path={reportProposedSalePath+`/issuer`} component={Issuer} />
        <Route exact path="/dashboard/report-proposed-sale/issuance-authorization" component={IssuanceAuthorization} />
        <Route exact path="/dashboard/report-proposed-sale/statutories" component={Statutory} />
        <Route path="/dashboard/report-proposed-sale/issuer-contact" component={IssuerContact} />
        <Route path="/dashboard/report-proposed-sale/filing-contact" component={FilingContact} />
        <Route path="/dashboard/report-proposed-sale/financing-participants" component={RetiredIssues} />
        <Route path="/dashboard/report-proposed-sale/interest-debt-exempt" component={InterestDebtExempt} />
        <Route path="/dashboard/report-proposed-sale/type-of-sale" component={TypeOfSale} />
        <Route path="/dashboard/report-proposed-sale/financing-private-placement" component={FinancingPrivatePlacement} />
        <Route path="/dashboard/report-proposed-sale/debt-policy" component={DebtPolicy} />
        <Route path="/dashboard/report-proposed-sale/type-of-debt" component={TypeOfDebt} />
        <Route path="/dashboard/report-proposed-sale/source-of-repayment" component={SourceOfRepayment} />
        <Route path="/dashboard/report-proposed-sale/purpose-of-financing" component={PurposeOfFinancing} />
        <Route path="/dashboard/report-proposed-sale/upload-documents" component={DocumentUpload} /> 
        <Route path="/dashboard/report-proposed-sale/review" component={ProposedDebtReview} /> */}
        <Route exact path="/:reportType/reports/:type" component={Reports} />
        <Route exact path="/admin/code-maintenance" component={CodeMaintenance} />
        <Route exact path="/admin/code-maintenance/:code" component={CodeDetails} />
        <Route exact path="/admin/debt-instrument-maintenance" component={DebtInsMaintenance} />
        <Route exact path="/admin/financing-purpose-maintenance" component={FinancingPurposeMaintenance} />
        <Route exact path="/admin/reports" component={AdminReports} />
        <Route exact path="/admin/county-maintenance" component={CountyMaintenance} />
        <Route exact path="/admin/organization-maintenance" component={OrganizationMaintenance} />
        <Route exact path="/admin/authorization-maintenance" component={AuthorizationMaintenance} />
        <Route exact path="/admin/organization-maintenance/:orgId" component={OrgDetails} />
        <Route exact path="/admin/debt-instrument-maintenance/:code" component={DebtDetails} />

        {/* <Route exact path="/reports/:type/id" component={Reports} /> */}
        <Route exact path="/admin" component={Admin} />      
        <Route exact path={dashboardPath} component={Dashboard} />      
        <Route exact path={reportProposedSalePath} component={ProposedSaleReport} />
        <Route exact path={reportFinalSalePath} component={FinalSaleReport} />
        <Route exact path={reportPrivateSaleResonPath} component={PrivateSaleReasonReport} />
        <Route exact path={drawOnReservePath} component={DrawOnReserve} />
      </Layout>
    </Switch>
    </>
  );
}

export default App;
