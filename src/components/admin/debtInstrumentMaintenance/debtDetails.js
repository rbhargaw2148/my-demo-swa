import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
//import Card from '../../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditDebtInstrumentForm from './editDebtInstrumentForm'
import AddDebtInstrumentForm from './addDebtInstrumentForm'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'

const DebtDetails = () => {
    const { SearchBar, ClearSearchButton } = Search;
    const [openEditCodeModal, setOpenModal] = useState(false);
    const [openAddCodeModal, setOpenAddCodeModal] = useState(false);

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
    }

    const columns = [{
        dataField: 'code',
        text: 'Code',
        sort: true
      }, {
        dataField: 'name',
        text: 'Name',
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
   const codes = [{
        'code':'BAN',
        'name':'Bond anticipation note',
        'createdDate':'06/05/2021',
        'lastUpdatedDate':'08/15/2021',
        'createdBy':'John',
        'updatedBy':'John',
        'isActive': 'Yes'
    },
    {
        'code':'GAN',
        'name':'Grant anticipation note',
        'createdDate':'06/05/2021',
        'lastUpdatedDate':'08/15/2021',
        'createdBy':'Sam',
        'updatedBy':'Sam',
        'isActive': 'No'
    }]
      
    return (
        <>
        <div className="form">
            <h1>Notes</h1>
            <ToolkitProvider
                keyField="id"
                data={ codes }
                columns={ columns }
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
                            Add New Debt Instrument
                        </button>
                        <hr />
                        <BootstrapTable
                        { ...props.baseProps }
                        pagination={paginationFactory()}
                        />
                    </div>
                    )
                }
                </ToolkitProvider>
        </div>
        {openEditCodeModal && <EditDebtInstrumentForm onModalClose={()=>setOpenModal(false)} />}
        {openAddCodeModal && <AddDebtInstrumentForm onModalClose={()=>setOpenAddCodeModal(false)} />}
        </>
    )
}

export default DebtDetails
