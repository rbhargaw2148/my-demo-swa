import {Table, Dropdown} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'

const ProposedDebtReports = () => {
    const { SearchBar, ClearSearchButton } = Search;

    const actions = [
        {value:'CI', label: 'Cancel Issue'},
        {value:'CFS', label: 'Create Final Sale'}
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
        if( action === 'CI' ) {
            alert("Cancel Issue Clicked");
        } else if( action === 'CFS') {
            alert( "Create Final Sale Clicked");
        }
    //    history.push('/admin')
    }
    const reportsList = [{
        reportId: "123",
        cdiacNo: "2019-0001",
        issueName: 'Issue 1'
    },
    {
        reportId: "234",
        cdiacNo: "2019-0002",
        issueName: 'Issue 2'
    },
    {
        reportId: "345",
        cdiacNo: "2019-0003",
        issueName: 'Issue 3'
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
        dataField: 'proposedSaleDate',
        text: 'Proposed Sale Date',
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

export default ProposedDebtReports
