import {useState} from 'react'
import StepNavigation from '../layout/StepNavigation'
import {useLocation} from 'react-router-dom'
import '../layout/Sidebar.css'
import { GoOrganization } from 'react-icons/go'
import {FaRegCommentDots, FaFileUpload} from 'react-icons/fa'
import {VscPreview, VscIssueClosed} from 'react-icons/vsc'
import {IoMdContact} from 'react-icons/io'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {MdReport} from 'react-icons/md'
import {ImHome3} from 'react-icons/im'

const MelloRoosProgressBar = (props) => {
    const {openSection} = props
    const [selectedWidget, setSelectedWidget] = useState('issuance');
    const {pathname} = useLocation();

    const progressBarData = [
        {
            title: "Issuance",
            path: "/draw-on-reserve",
            section: "issuance",
            icon: <GoOrganization style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Fund Balance",
            path: "/draw-on-reserve",
            section: "fundBalance",
            icon: <RiMoneyDollarCircleLine style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Assessed Value",
            path: "/draw-on-reserve",
            section: "assessedValue",
            icon: <IoMdContact style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Delinquent Reporting",
            path: "/draw-on-reserve",
            section: "delinquentReporting",
            icon: <MdReport style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Document Upload",
            path: "/draw-on-reserve",
            section: "docUpload",
            icon: <FaFileUpload style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Foreclosure",
            path: "/draw-on-reserve",
            section: "foreclosure",
            icon: <ImHome3 style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Retired Issues",
            path: "/draw-on-reserve",
            section: "retiredIssues",
            icon: <VscIssueClosed style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Filing Contact",
            path: "/draw-on-reserve",
            section: "filingContact",
            icon: <IoMdContact style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Comments",
            path: "/draw-on-reserve",
            section: "comments",
            icon: <FaRegCommentDots style={{width:'2rem', height: '2rem'}}/>
        },
        {
            title: "Review",
            path: "/draw-on-reserve",
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

export default MelloRoosProgressBar
