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
            <div className="panel panel-default" id="stepspanel" style={{marginBottom: '0px'}}>
        
                <div className="panel-heading">
                    <div className="container">
                        <h1 className="main-title">Reason for Private Sale Report</h1>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <PrivateSaleProgressBar openSection={openWidget} />
                        <div className="center-align">
                        <button
                            type="button"
                            style={{textDecoration: 'none', fontWeight: '500'}}
                            className="dk-blue-color link-button" 
                            onClick={()=>toggleAllWidgets()}>{expandAll ? <VscCollapseAll /> : <VscExpandAll /> } {expandAll ? "Collapse All" : "Expand All" }</button></div><br/>
                    </div>
                </div>
            </div>
            <CollapsibleWidgets openSectionObj={openSection} toggleWidget={toggleWidget} openSection={openWidget}/>
        </div>
        </>
    )
}

export default PrivateSaleReasonReport
