import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Card from '../../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye , faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import EditContact from './editContact'
import AddFinancePurposeForm from './addFinancePurposeForm'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'

const SearchResultContainer = (props) => {
    const { SearchBar, ClearSearchButton } = Search;
    const [openEditContactModal, setOpenModal] = useState(false);
    const [openAddCodeModal, setOpenAddCodeModal] = useState(false);
    const [editContact, setEditContact] = useState([])
    const viewFormatter = (cell, row, rowIndex, formatExtraData) => { 
        return ( 
              <div 
                  style={{ textAlign: "center",
                    lineHeight: "normal" }}>
    {/* onClick={(e)=>this.onRowClick(e, row)} */}
           <FontAwesomeIcon icon={faPencilAlt} className="custom-icon" style={{ fontSize: 'medium'}} onClick={(e)=>onRowClick(e, row)} />
         </div> 
        ); 
    }

    const onRowClick = (e, row) => {
       // e.preventDefault();
        setOpenModal(true);
        setEditContact(row);
    }

    const columns = [{
        dataField: 'fname',
        text: 'First Name',
        sort: true
      },{
        dataField: 'lname',
        text: 'Last Name',
        sort: true
      }, 
    //   {
    //     dataField: 'email',
    //     text: 'Email',
    //     sort: true
    //   },
       {
        dataField: 'createdDate',
        text: 'Date Created',
        sort: true
      },{
        dataField: 'lastUpdatedDate',
        text: 'Last Updated',
        sort: true
      }, 
    //   {
    //     dataField: 'createdBy',
    //     text: 'Created By',
    //     sort: true
    //   },{
    //     dataField: 'updatedBy',
    //     text: 'Last Updated By',
    //     sort: true
    //   },
      {
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
            'fname': 'John',
            'lname': 'Doe',
            // 'email':'John.Doe@qualapps.com',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            // 'createdBy':'John',
            // 'updatedBy':'John',
            'isActive': 'Yes'
        },
        {
            'fname': 'Darrell',
            'lname': 'Steinberg',
            // 'email':'Darrell.Steinberg@qualapps.com',
            'createdDate':'06/05/2021',
            'lastUpdatedDate':'08/15/2021',
            // 'createdBy':'Sam',
            // 'updatedBy':'Sam',
            'isActive': 'No'
        }
      ]
      
    return (
        <>
        <div className="form">
            <h1>Organization Name</h1>
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
                            Add New Contact
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
        {openEditContactModal && <EditContact onModalClose={()=>setOpenModal(false)} contact={editContact}/>}
        {openAddCodeModal && <EditContact onModalClose={()=>setOpenAddCodeModal(false)} formType="Add"/>}
        </>
    )
}

export default SearchResultContainer
