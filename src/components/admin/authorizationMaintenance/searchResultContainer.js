import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
//import {useHistory, useLocation} from 'react-router-dom'
import ViewIssuances from './viewIssuances'
import AuthorizationSummary from './authorizationSummary'
import AddAuthorization from './addAuthorization'
import EditAuthorization from './editAuthorization'

const SearchResultContainer = (props) => {
    const { SearchBar, ClearSearchButton } = Search;
    const [openAddAuthModal, setOpenAddAuthModal] = useState(false);
    const [openViewIssuances, setOpenViewIssuances] = useState(false);
    const [openAuthSummary, setOpenAuthSummary] = useState(false);
    const [editAuthorization, setEditAuthorization] = useState(false);
    const [selectedAuthInfo, setSelectedAuthInfo] = useState([]);
    // const history = useHistory();
    // const {pathname} = useLocation();

    const handleViewIssuancesClick= (e, row) => {
      e.stopPropagation();
      setOpenViewIssuances(true);
    }
    const handleAuthSummaryClick = (e, row) => {
      e.stopPropagation();
      setOpenAuthSummary(true);
    }
    const viewFormatter = (cell, row, rowIndex, formatExtraData) => { 
        return ( 
          <div style={{ textAlign: "center",
              lineHeight: "normal" }}>
                <button
                  type="button"
                  className="link-button dk-blue-color"
                  onClick={(e)=>handleViewIssuancesClick(e, row)}>View Issuances
                </button>
                <button
                  type="button"
                  className="link-button dk-blue-color"
                  onClick={(e)=>handleAuthSummaryClick(e, row)}>Authorization Summary
                </button>
          </div> 
        ); 
    }
    // const onViewOrgClick = (e, row) => {
    //    e.stopPropagation();
    //     //setViewOrgDetails(true);
    //     history.push(pathname+"/"+row.id);
    // }

    const columns = [{
        dataField: 'orgName',
        text: 'Organization Name',
        sort: true
      }, {
        dataField: 'authorization',
        text: 'Authorization',
        sort: true
      }, {
        dataField: 'electionDate',
        text: 'Election Date',
        sort: true
      },{
        dataField: 'authAmount',
        text: 'Authorization Amount',
        sort: true
      }, {
        dataField: 'origin',
        text: 'Origin',
        sort: true
      }, { 
        dataField: "",
        text: "", 
        formatter: viewFormatter,
        // events: {
        //   onClick: (e, column, columnIndex, row, rowIndex) => {
        //     e.stopPropagation();
        //   },
          // }
      }
    ];
    
   const searchResult = [{
            'id':1,
            'orgName':'CMDV',
            'authorization':'Commercial Development',
            'electionDate':'06/05/2021',
            'authAmount':'$23,445',
            'origin':'Issues',
        },
        {
          'id': 2,
          'orgName':'CMDV',
          'authorization':'Commercial Development',
          'electionDate':'06/05/2021',
          'authAmount':'$23,445',
          'origin':'Issues',
        }
      ]
    
      const options = {
        onClick: function(e, row){
          setSelectedAuthInfo(row);
          setEditAuthorization(true);
        }
       }
       
    return (
        <>
        <div className="form">
            <h1>Search Result: </h1>
            <ToolkitProvider
                keyField="id"
                data={ searchResult }
                columns={ columns }
                pagination={ paginationFactory() }
                options={options}
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
                        <button
                            className="btn bg-success text-light rounded"
                            style={{float: 'right'}}
                            onClick={()=>setOpenAddAuthModal(true)}  >
                            Add New Authorization
                        </button>
                        <hr />
                        <BootstrapTable
                        pagination={ paginationFactory() }
                        rowEvents={options}
                        { ...props.baseProps }
                        striped
                        rowStyle={{cursor: 'pointer'}}
                        />
                    </div>
                    )
                }
                </ToolkitProvider>
        </div>
        {/* {openEditCodeModal && <EditFinancePurposeForm onModalClose={()=>setOpenModal(false)} orgInfo={editFinancialPurposeInfo}/>} */}
        {openAddAuthModal && <AddAuthorization onModalClose={()=>setOpenAddAuthModal(false)}/>}
        {/* {viewOrgDetails && <OrgDetails onModalClose={()=>setViewOrgDetails(false)}/>} */}
        { editAuthorization && <EditAuthorization onModalClose={()=>setEditAuthorization(false)} authInfo={selectedAuthInfo} />}
        { openViewIssuances && <ViewIssuances onModalClose={()=>setOpenViewIssuances(false)}/>}
        { openAuthSummary && <AuthorizationSummary onModalClose={()=>setOpenAuthSummary(false)}/>}
        </>
    )
}

export default SearchResultContainer
