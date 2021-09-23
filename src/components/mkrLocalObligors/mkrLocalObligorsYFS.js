import {useState} from 'react'
import CollapsibleWidgets from'./collapsibleWidgets'
import MKRLocalObligorsProgressBar from './mkrLocalObligorsProgressBar';
import {VscExpandAll, VscCollapseAll} from 'react-icons/vsc'

const MKRLocalObligorsYFS = (props) => {
    const cdiacNo = props.match.params.cdiac;
    const [expandAll, setExpandAll] = useState(false);
    const [openSection, setOpenSection] = useState({
        issuance: true,
        fundBalance: false,
        delinquentReporting: false,
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
            <div>
                <div className="panel panel-default" id="stepspanel" style={{marginBottom: '0px'}}>
    
                    <div className="panel-heading">
                        <div className="container">
                            <div className="panel-title">
                                <h1 className="menu-title">Marks Roos Yearly Fiscal Status Report For Local Obligors</h1>                                
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="container">
                            <MKRLocalObligorsProgressBar openSection={openWidget} />
                            <div className="center-align">
                            <button
                            type="button"
                            style={{textDecoration: 'none', fontWeight: '500'}}
                            className="dk-blue-color link-button"
                            onClick={()=>toggleAllWidgets()}>{expandAll ? <VscCollapseAll /> : <VscExpandAll /> } {expandAll ? "Collapse All" : "Expand All" }</button>
                            </div><br/>
                            <div style={{color: 'green'}}>
                            <em>CDIAC # {cdiacNo}</em>
                            <br/>
                            <em>Balances Reported as of June 30, </em>2021
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
            <CollapsibleWidgets openSectionObj={openSection} toggleWidget={toggleWidget} openSection={openWidget}/>
        </div>
    )
}

export default MKRLocalObligorsYFS
