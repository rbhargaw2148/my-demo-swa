import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditCountyForm from './editCountyForm'
import AddCountyForm from './addCountyForm'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'

const FinancialPurposeDetails = (props) => {
    const {groupCode, groupValue} = props;
    const { SearchBar, ClearSearchButton } = Search;
    const [openEditCodeModal, setOpenModal] = useState(false);
    const [openAddCodeModal, setOpenAddCodeModal] = useState(false);
    const [editFinancialPurposeInfo, setEditFinancialPurposeInfo] = useState([])
    const viewFormatter = (cell, row, rowIndex, formatExtraData) => { 
        return ( 
              <div 
                  style={{ textAlign: "center",
                    lineHeight: "normal" }}>
           <FontAwesomeIcon icon={faPencilAlt} className="custom-icon" onClick={(e)=>onRowClick(e, row)}/> 
         </div> 
        ); 
    }

    const onRowClick = (e, row) => {
       // e.preventDefault();
        setOpenModal(true);
        setEditFinancialPurposeInfo(row);
    }

    const columns = [{
        dataField: 'code',
        text: 'County Code',
        sort: true
      }, {
        dataField: 'county',
        text: 'County Name',
        sort: true
      }, {
        dataField: 'createdDate',
        text: 'Date Created'
      },{
        dataField: 'lastUpdatedDate',
        text: 'Last Updated'
      }, {
        dataField: 'createdBy',
        text: 'Created By'
      },{
        dataField: 'updatedBy',
        text: 'Last Updated By'
      },{
        dataField: 'isActive',
        text: 'Active'
      },{ 
        dataField: "",
        text: "", 
        formatter: viewFormatter,}
    ];
    
   const financingPurpose = {
        "SFB" : [{
            'code':'1',
            'county':'Alameda',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        },
        {
            'code':'2',
            'county':'Sonoma',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'Sam',
            'updatedBy':'Sam',
            'isActive': 'No'
        }],
        "SV" : [{
            'code':'1',
            'county':'Placer',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        },
        {
            'code':'2',
            'county':'Sutter',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        }],
        "SD" : []
    }
      
    return (
        <>
        <br />
        <div className="">
            <h1>{groupValue}</h1>
            <ToolkitProvider
                keyField="code"
                data={ financingPurpose[groupCode]}
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
                            Add New County
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
        {openEditCodeModal && <EditCountyForm onModalClose={()=>setOpenModal(false)} financialPurpose={editFinancialPurposeInfo} groupValue={groupValue}/>}
        {openAddCodeModal && <AddCountyForm onModalClose={()=>setOpenAddCodeModal(false)} groupValue={groupValue}/>}
        </>
    )
}

export default FinancialPurposeDetails
