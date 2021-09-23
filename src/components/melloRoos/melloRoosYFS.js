import {useState} from 'react'
import CollapsibleWidgets from'./collapsibleWidgets'
import MelloRoosProgressBar from './melloRoosProgressBar';
import {VscExpandAll, VscCollapseAll} from 'react-icons/vsc'

const MelloRoosYFS = (props) => {
    const cdiacNo = props.match.params.cdiac;
    const [expandAll, setExpandAll] = useState(false);
    const [openSection, setOpenSection] = useState({
        issuance: true,
        fundBalance: false,
        assessedValue: false,
        taxCollection: false,
        delinquentReporting: false,
        docUpload: false,
        foreclosure: false,
        retiredIssues: false,
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
    return (
        <div>
            <div className="panel panel-default" id="stepspanel" style={{marginBottom: '0px'}}>
        
                <div className="panel-heading">
                    <div className="container">
                        <h1 className="main-title">Mello Roos Yearly Fiscal Status Report</h1>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="container">
                        <MelloRoosProgressBar openSection={openWidget} />
                        <div className="center-align">
                            <button
                                type="button"
                                style={{textDecoration: 'none', fontWeight: '500'}}
                                className="dk-blue-color link-button" onClick={()=>toggleAllWidgets()}>{expandAll ? <VscCollapseAll /> : <VscExpandAll /> } {expandAll ? "Collapse All" : "Expand All" }</button>
                        </div>
                        <br/>
                        <div style={{color: 'green'}}>
                            <em>CDIAC # {cdiacNo}</em>
                            <br/>
                            <em>Balances Reported as of June 30, </em>2021
                        </div>
                    </div>
                </div>
            </div>
            <CollapsibleWidgets openSectionObj={openSection} toggleWidget={toggleWidget} openSection={openWidget}/>
        </div>
    )
}

export default MelloRoosYFS
