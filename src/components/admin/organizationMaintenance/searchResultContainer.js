import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Card from '../../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye , faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import EditFinancePurposeForm from './editFinancePurposeForm'
import AddFinancePurposeForm from './addFinancePurposeForm'
import OrgDetails from './orgDetails'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {useHistory, useLocation} from 'react-router-dom'

const SearchResultContainer = (props) => {
    const { SearchBar, ClearSearchButton } = Search;
    const [openEditCodeModal, setOpenModal] = useState(false);
    const [openAddCodeModal, setOpenAddCodeModal] = useState(false);
    const [editFinancialPurposeInfo, setEditFinancialPurposeInfo] = useState([]);
    const [viewOrgDetails, setViewOrgDetails] = useState(false)

    const history = useHistory();
    const {pathname} = useLocation();
    const viewFormatter = (cell, row, rowIndex, formatExtraData) => { 
        return ( 
              <div 
                  style={{ textAlign: "center",
                    lineHeight: "normal" }}>
    {/* onClick={(e)=>this.onRowClick(e, row)} */}
           <FontAwesomeIcon icon={faEye} className="custom-icon" style={{ fontSize: 'medium'}} onClick={(e)=>onViewOrgClick(e, row)} />{"  "}
           <FontAwesomeIcon icon={faPencilAlt} className="custom-icon" style={{ fontSize: 'medium'}} onClick={(e)=>onRowClick(e, row)} />
         </div> 
        ); 
    }

    const onRowClick = (e, row) => {
       // e.preventDefault();
        setOpenModal(true);
        setEditFinancialPurposeInfo(row);
    }
    const onViewOrgClick = (e, row) => {
       // e.preventDefault();
        //setViewOrgDetails(true);
        history.push(pathname+"/"+row.id);
    }

    const columns = [{
        dataField: 'id',
        text: 'Org ID',
        sort: true
      },{
        dataField: 'name',
        text: 'Name',
        sort: true
      }, {
        dataField: 'shortName',
        text: 'Short Name',
        sort: true
      }, {
        dataField: 'createdDate',
        text: 'Date Created',
        sort: true
      },{
        dataField: 'lastUpdatedDate',
        text: 'Last Updated',
        sort: true
      }, {
        dataField: 'createdBy',
        text: 'Created By',
        sort: true
      },{
        dataField: 'updatedBy',
        text: 'Last Updated By',
        sort: true
      },{
        dataField: 'isActive',
        text: 'Active',
        sort: true
      },{ 
        dataField: "",
        text: "", 
        formatter: viewFormatter,}
    ];
    
        //"GAN":"Grant anticipation note",
   const financingPurpose = [{
            'id': 28810,
            'shortName':'CMDV',
            'name':'Commercial Development',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        },
        {
          'id': 28811,
            'shortName':'INDV',
            'name':'Industrial Development',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'Sam',
            'updatedBy':'Sam',
            'isActive': 'No'
        }
      ]
      
    return (
        <>
        <div className="form">
            <h1>Search Result: </h1>
            <ToolkitProvider
                keyField="code"
                data={ financingPurpose}
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
                        <button
                            className="btn bg-success text-light rounded"
                            style={{float: 'right'}}
                            onClick={()=>setOpenAddCodeModal(true)}  >
                            Add New Organization
                        </button>
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
        {openEditCodeModal && <EditFinancePurposeForm onModalClose={()=>setOpenModal(false)} orgInfo={editFinancialPurposeInfo}/>}
        {openAddCodeModal && <AddFinancePurposeForm onModalClose={()=>setOpenAddCodeModal(false)}/>}
        {viewOrgDetails && <OrgDetails onModalClose={()=>setViewOrgDetails(false)}/>}
        </>
    )
}

export default SearchResultContainer
