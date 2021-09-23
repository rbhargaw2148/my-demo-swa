import {useState} from 'react'
import CollapsibleWidgets from './collapsibleWidgets'
import DrawOnReserveContext from './drawOnReserveContext'
import DrawProgressBar from './drawProgressBar'
import {VscExpandAll, VscCollapseAll} from 'react-icons/vsc'

const DrawOnReserve = () => {
    const [expandAll, setExpandAll] = useState(false);
    const [openContextModal, setOpenContextModal] = useState(true);
    const [openSection, setOpenSection] = useState({
        issuance: true,
        draw: false,
        filingContact: false,
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
        {openContextModal && <DrawOnReserveContext onModalClose={()=>setOpenContextModal(false)}/>}
        <div>
            <div className="panel panel-default" id="stepspanel" style={{marginBottom: '0px'}}>

                <div className="panel-heading">
                    <div className="container">
                        <div id="packet_id" className="panel-title">
                            <h1 className="menu-title">Draw on Reserve/Default/Replenishment</h1>
                        </div>
                    </div>
                </div>

                <div className="panel-body">
                    <div className="container">
                        <DrawProgressBar openSection={openWidget} />
                        <div className="center-align">
                            <button
                            type="button"
                            style={{textDecoration: 'none', fontWeight: '500'}}
                            className="dk-blue-color link-button" onClick={()=>toggleAllWidgets()}>{expandAll ? <VscCollapseAll /> : <VscExpandAll /> } {expandAll ? "Collapse All" : "Expand All" }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CollapsibleWidgets openSectionObj={openSection} toggleWidget={toggleWidget} openSection={openWidget}/>
            <br/>
        </div>
        </>
    )
}

export default DrawOnReserve
