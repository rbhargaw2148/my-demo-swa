import {useState} from 'react'
import Issuer from '../issuer/index'
import AcknowledgementModal from './acknowledgementModal'
import CollapsibleWidget from './collapsibleWidgets'
import ProgressBar from '../layout/ProgressBar'
import {VscExpandAll, VscCollapseAll} from 'react-icons/vsc'
import History from './history'

const ProposedSaleReport = () => {
    // const [showModal, setShowModal] = useState(true);
    // const handleModalClose = () => {
    //     setShowModal(false)
    // }
    const [showHistory, setShowHistory] = useState(false);
    const [expandAll, setExpandAll] = useState(false);
    const [openSection, setOpenSection] = useState({
        issuer: true,
        issuanceAuthorization: false,
        statutories: false,
        issuerContact: false,
        filingContact: false,
        financingParticipants: false,
        typeOfDebt: false,
        interestDebtExempt: false,
        typeOfSale: false,
        sourceOfRepayment: false,
        purposeOfFinancing: false,
        uploadDoc: false,
        review: false
    });

    const toggleWidget = (sectionName) => {
      setOpenSection({...openSection, [sectionName]: !(openSection[sectionName])})
    }

    const toggleAllWidgets = () => {
        setExpandAll( !(expandAll) );
        let openSecObj = Object.assign(...Object.keys(openSection).map(k => ({ [k]: !(expandAll) })));
        setOpenSection(openSecObj);
    }
    const openWidget = (sectionName) => {
        let openSecObj = Object.assign(...Object.keys(openSection).map(k => ({ [k]: false })));
        openSecObj[sectionName] = !(openSecObj[sectionName]);
        setOpenSection(openSecObj);
    }
    return (
        <div>
            {/* {showModal && <AcknowledgementModal onModalClose={handleModalClose}/>} */}
            <ProgressBar openSection={openWidget}/> 
            <div className="center-align">
                <a className="dk-blue-color" onClick={()=>toggleAllWidgets()}>{expandAll ? <VscCollapseAll /> : <VscExpandAll /> } {expandAll ? "Collapse All" : "Expand All" }</a>
                <div style={{float: 'right'}}><a href="#" onClick={()=>setShowHistory(true)}>show history</a></div>
            </div><br/>
            <CollapsibleWidget openSectionObj={openSection} toggleWidget={toggleWidget} openSection={openWidget}/>
            {showHistory && <History onModalClose={()=>setShowHistory(false)}/>}
        </div>
    )
}

export default ProposedSaleReport
