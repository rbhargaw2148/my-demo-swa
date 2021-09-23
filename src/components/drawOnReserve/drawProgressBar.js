import {useState} from 'react'
import StepNavigation from '../layout/StepNavigation'
import {useLocation} from 'react-router-dom'
import '../layout/Sidebar.css'
import { GoOrganization } from 'react-icons/go'
import {FaRegCommentDots} from 'react-icons/fa'
import {VscPreview} from 'react-icons/vsc'
import {IoMdContact} from 'react-icons/io'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'

const DrawProgressBar = (props) => {
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
            title: "Draw",
            path: "/draw-on-reserve",
            section: "draw",
            icon: <RiMoneyDollarCircleLine style={{width:'2rem', height: '2rem'}}/>
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

export default DrawProgressBar
