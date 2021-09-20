import {Table, Dropdown} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'

const FinalSaleReports = () => {
    const { SearchBar, ClearSearchButton } = Search;
    const history = useHistory();
    
    const actions = [
        {value:'CI', label: 'Cancel Issue'},
        {value:'D', label: 'Draw on Reserve Replenishment'},
        {value:'ADTR', label: 'ADTR'},
        {value:'RPSR', label: 'Report of Private Sale Reason'},
        {value:'MEYS', label: 'Mello-Roos Yearly Status'},
        {value:'MEYS', label: 'Mello-Roos Authority Yearly Status'},
        {value:'MLBYS', label: 'Marks-Roos Loca Obligors Yearly Status'},
    ]
    const viewFormatter = (cell, row, rowIndex, formatExtraData) => { 
        return ( 
              <div 
                  style={{ textAlign: "center",
                    lineHeight: "normal" }}>
                        {/* <Select options={actions} onChange={(e)=>handleActionClick(e)}/> */}
                        <div className="dropdown">
                            <Dropdown>
                            <Dropdown.Toggle 
                            variant="secondary btn-sm" 
                            id="dropdown-basic">
                                Action
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor:'#73a47'}} >
                                {actions.map((action, i)=> {
                                    return <Dropdown.Item key={i} href="#" onClick={(e)=>handleActionClick(e, action.value )}>{action.label}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
         </div> 
        ); 
    }

    const handleActionClick = (e, action) => {
        switch (action) {
            case "CI":
                alert("Cancel Issue Clicked");
                break;
            case "D":
                history.push('/draw-on-reserve');
                break;
            case "ADTR":
                alert("ADTR Clicked");
                break;
            case "RPSR":
                history.push('/report-private-sale-reason');
                break;
            case "MEYS":
                alert("Mello-Roos Yearly Status Clicked");
                break;
            case "MAYS":
                alert( "Mark-Roos Authority Yearly Status Clicked");
                break;
            case "MLBYS":
                alert( "Mark-Roos Local Obligors Yearly Status Clicked");
                break;
        default:
            break;
        }
    //    history.push('/admin')
    }
    const reportsList = [{
        reportId: "123",
        cdiacNo: "2019-0001",
        issueName: 'Issue 1',
        projectName: 'Windemere Ranch Series A',
        
    },
    {
        reportId: "234",
        cdiacNo: "2019-0002",
        issueName: 'Issue 2',
        projectName: 'Windemere Ranch Series B'
    },
    {
        reportId: "345",
        cdiacNo: "2019-0003",
        issueName: 'Issue 3',
        projectName: 'Windemere Ranch Series C'
    }]

    const columns = [{
        dataField: 'cdiacNo',
        text: 'CDIAC #',
        sort: true
      }, {
        dataField: 'issueName',
        text: 'Issue Name',
        sort: true
      }, {
        dataField: 'issuerName',
        text: 'Issuer Name',
        sort: true
      }, {
        dataField: 'projectName',
        text: 'Project Name',
        sort: true
      }, {
        dataField: 'finalSaleDate',
        text: 'Final Sale Date',
        sort: true
      },{ 
        dataField: "",
        text: "Action", 
        formatter: viewFormatter,
    }
    
    ]
    return (
        <div>
            <ToolkitProvider
                keyField="code"
                data={ reportsList }
                columns={ columns }
                pagination={ paginationFactory() }
                search
                >
                {
                    props => (
                    <div>
                        <h6>Search:<MDBTooltip domElement tag="span" placement="right">
                        <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
                        <span>Use the search feature to quickly retrieve the system code values</span>
                    </MDBTooltip></h6>
                        <SearchBar { ...props.searchProps } style={{margin: 0}}/>
                        <ClearSearchButton { ...props.searchProps } style={{border: '1px solid gray'}}/>
                        <hr />
                        <BootstrapTable
                        pagination={ paginationFactory() }
                        { ...props.baseProps }
                        />
                    </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}

export default FinalSaleReports
