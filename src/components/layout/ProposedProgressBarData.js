import {FaUserCircle, FaFileUpload, FaUsers, FaUserTie, FaUser} from 'react-icons/fa'
import {GrDocumentUpload} from 'react-icons/gr'
import {VscSymbolMisc, VscPreview, VscOrganization} from 'react-icons/vsc'
import {IoMdPaper} from 'react-icons/io'
import {FcDebt, FcApprove} from 'react-icons/fc'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { AiOutlineCode } from 'react-icons/ai'
import { GoOrganization } from 'react-icons/go'
import {SiAuth0} from 'react-icons/si'

export const ProposedProgressBarData = [
    {
        title: "Issuer",
        path: "/reports/report-proposed-sale/issuer",
        section: "issuer",
        // icon: <FaUserCircle style={{width:'1.5rem', height: '2rem'}}/>
        icon: <GoOrganization style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Issuance Authorization",
        path: "/reports/report-proposed-sale/issuance-authorization",
        section: "issuanceAuthorization",
        icon: <SiAuth0 style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Statutes",
        path: "/reports/report-proposed-sale/statutories",
        section: "statutories",
        icon: <AiOutlineCode style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Issuer Contact",
        path: "/reports/report-proposed-sale/issuer-contact",
        section: "issuerContact",
        icon: <FaUserTie style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Filing Contact",
        path: "/reports/report-proposed-sale/filing-contact",
        section: "filingContact",
        icon: <FaUser style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Financing Participants",
        path: "/reports/report-proposed-sale/financing-participants",
        section: "financingParticipants",
        icon: <FaUsers style={{width:'1.5rem', height: '2rem'}} />
    },
    {
        title: "Interest Debt Exempt",
        path: "/reports/report-proposed-sale/interest-debt-exempt",
        section: "interestDebtExempt",
        icon: <FcDebt style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Misc",
        path: "/reports/report-proposed-sale/type-of-sale",
        section: "typeOfSale",
        icon: <VscSymbolMisc style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Type of Debt Instrument",
        path: "/reports/report-proposed-sale/type-of-debt",
        section: "typeOfDebt",
        icon: <IoMdPaper style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Source of Repayment",
        path: "/reports/report-proposed-sale/source-of-repayment",
        section: "sourceOfRepayment",
        icon: <RiSecurePaymentFill style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Purpose of Financing",
        path: "/reports/report-proposed-sale/purpose-of-financing",
        section: "purposeOfFinancing",
        icon: <VscOrganization style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Upload Documents",
        path: "/reports/report-proposed-sale/upload-documents",
        section: "uploadDoc",
        icon: <GrDocumentUpload style={{width:'1.5rem', height: '2rem'}}/>
    },
    {
        title: "Review",
        path: "/reports/report-proposed-sale/review",
        section: "review",
        icon: <VscPreview style={{width:'1.5rem', height: '2rem'}}/>
    },
]