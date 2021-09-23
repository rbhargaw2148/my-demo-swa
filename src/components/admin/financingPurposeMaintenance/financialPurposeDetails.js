import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
// import Card from '../../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditFinancePurposeForm from './editFinancePurposeForm'
import AddFinancePurposeForm from './addFinancePurposeForm'
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
    {/* onClick={(e)=>this.onRowClick(e, row)} */}
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
        text: 'Finance Purpose Code',
        sort: true
      }, {
        dataField: 'name',
        text: 'Finance Purpose Name',
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
   const financingPurpose = {
        "I" : [{
            'code':'CMDV',
            'name':'Commercial Development',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        },
        {
            'code':'INDV',
            'name':'Industrial Development',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'Sam',
            'updatedBy':'Sam',
            'isActive': 'No'
        }],
        "P" : [{
            'code':'APRT',
            'name':'Airport',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        },
        {
            'code':'EQUP',
            'name':'Equipment',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            'createdBy':'John',
            'updatedBy':'John',
            'isActive': 'Yes'
        }],
        "R" : [],
        "Z" : [],
        "M" : []

    }
      
    return (
        <>
        <div className="form">
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
                            Add New Finance Purpose
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
        {openEditCodeModal && <EditFinancePurposeForm onModalClose={()=>setOpenModal(false)} financialPurpose={editFinancialPurposeInfo} groupValue={groupValue}/>}
        {openAddCodeModal && <AddFinancePurposeForm onModalClose={()=>setOpenAddCodeModal(false)} groupValue={groupValue}/>}
        </>
    )
}

export default FinancialPurposeDetails
