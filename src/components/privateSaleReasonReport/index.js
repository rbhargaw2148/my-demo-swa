import {useState} from 'react'
import CollapsibleWidgets from './collapsibleWidgets'
import PrivateSaleReasonContext from './privateSaleReasonContext'
import PrivateSaleProgressBar from './privateSaleProgressBar'
import {VscExpandAll, VscCollapseAll} from 'react-icons/vsc'

const PrivateSaleReasonReport = () => {
    const [expandAll, setExpandAll] = useState(false);
    const [openContextModal, setOpenContextModal] = useState(true);
    const [openSection, setOpenSection] = useState({
        issuance: true,
        negotiatedRefunding: false,
        revenueBonds: false,
        contactInformation: false,
        comments: false,
        review: false
    });
    const toggleAllWidgets = () => {
        setExpandAll( !(expandAll) );
        let openSecObj = Object.assign(...Object.keys(openSection).map(k => ({ [k]: !(expandAll) })));
        setOpenSection(openSecObj);
    }

    const toggleWidget = (sectionName) => {
        setOpenSection({...openSection, [sectionName]: !(openSection[sectionName])})
    }

    const openWidget = (sectionName) => {
        let openSecObj = Object.assign(...Object.keys(openSection).map(k => ({ [k]: false })));
        openSecObj[sectionName] = !(openSecObj[sectionName]);
        setOpenSection(openSecObj);
    }
    return (<>
        {openContextModal && <PrivateSaleReasonContext onModalClose={()=>setOpenContextModal(false)}/>}
        <div>
            <h1>Reason for Private Sale Report</h1>
            <PrivateSaleProgressBar openSection={openWidget} />
            <div className="center-align"><a className="dk-blue-color" onClick={()=>toggleAllWidgets()}>{expandAll ? <VscCollapseAll /> : <VscExpandAll /> } {expandAll ? "Collapse All" : "Expand All" }</a></div><br/>
            <CollapsibleWidgets openSectionObj={openSection} toggleWidget={toggleWidget} openSection={openWidget}/>
        </div>
        </>
    )
}

export default PrivateSaleReasonReport
