import {useState} from 'react'
import StepNavigation from '../layout/StepNavigation'
import {useLocation} from 'react-router-dom'
import '../layout/Sidebar.css'
import { GoOrganization } from 'react-icons/go'
import {FaPiggyBank, FaRegCommentDots} from 'react-icons/fa'
import {RiRefund2Fill} from 'react-icons/ri'
import {VscPreview} from 'react-icons/vsc'
import {IoMdContact} from 'react-icons/io'

const PrivateSaleProgressBar = (props) => {
    const {openSection} = props
    const [selectedWidget, setSelectedWidget] = useState('issuance');
    const {pathname} = useLocation();

    const progressBarData = [
        {
            title: "Issuance",
            path: "/dashboard/report-proposed-sale/issuer",
            section: "issuance",
            icon: <GoOrganization style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Negotiated Refunding",
            path: "/dashboard/report-proposed-sale/issuer",
            section: "negotiatedRefunding",
            icon: <RiRefund2Fill style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Revenue Bonds",
            path: "/dashboard/report-proposed-sale/issuer",
            section: "revenueBonds",
            icon: <FaPiggyBank style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Filing Contact",
            path: "/dashboard/report-proposed-sale/issuer",
            section: "contactInformation",
            icon: <IoMdContact style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Comments",
            path: "/dashboard/report-proposed-sale/issuer",
            section: "comments",
            icon: <FaRegCommentDots style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Review",
            path: "/dashboard/report-proposed-sale/issuer",
            section: "review",
            icon: <VscPreview style={{width:'2rem', height: '2rem'}}/>
        },
    ]
    const updateStep = (step, section) => {
        setSelectedWidget(section);
        openSection(section);

    }
    return (
        <div style={{textAlign: 'center'}}>
            <StepNavigation labelArray={progressBarData} updateStep={updateStep} pathName={pathname} selectedWidget={selectedWidget}/>
        </div>
    )
}

export default PrivateSaleProgressBar
