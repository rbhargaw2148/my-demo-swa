import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import Card from '../ui/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditCodeForm from './editCodeForm'
import AddCodeForm from './addCodeForm'
import {MDBTooltip} from 'mdbreact'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'

const CodeDetails = () => {
    const history = useHistory();
    //const groupValue = history.location.groupVal;
    const { SearchBar, ClearSearchButton } = Search;
    const [openEditCodeModal, setOpenModal] = useState(false);
    const [openAddCodeModal, setOpenAddCodeModal] = useState(false);
    const [editCodeInfo, setEditCodeInfo] = useState([])

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
        setEditCodeInfo(row);
    }

    const columns = [{
        dataField: 'code',
        text: 'Code',
        sort: true
      }, {
        dataField: 'desc',
        text: 'Description',
        sort: true
      }, {
        dataField: 'briefDesc',
        text: 'Brief Description'
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
    
        //"GAN":"Grant anticipation note",
   const codes = [{
        'code':'EPAB',
        'desc':'Elimination of AMT on Private Activity Bonds (ARRA 2009)',
        'briefDesc': 'Brief Desc about Elimination of AMT on Private Activity Bonds (ARRA 2009)',
        'createdDate':'06/05/2021',
        'lastUpdatedDate':'08/15/2021',
        'createdBy':'John',
        'updatedBy':'John',
        'isActive': 'Yes'
    },
    {
        'code':'ARS',
        'desc':'Auction Rate Securities',
        'briefDesc': 'Brief Desc about Auction Rate Securities',
        'createdDate':'06/05/2021',
        'lastUpdatedDate':'08/15/2021',
        'createdBy':'Sam',
        'updatedBy':'Sam',
        'isActive': 'No'
    }]
      
    return (
        <Card>
        <div className="form">
            <h1>{history.location.groupVal}</h1>
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
                            Add New Code
                        </button>
                        <hr />
                        <BootstrapTable
                        { ...props.baseProps }
                        />
                    </div>
                    )
                }
                </ToolkitProvider>
        </div>
        {openEditCodeModal && <EditCodeForm onModalClose={()=>setOpenModal(false)} codeInfo={editCodeInfo} />}
        {openAddCodeModal && <AddCodeForm onModalClose={()=>setOpenAddCodeModal(false)} />}
        </Card>
    )
}

export default CodeDetails
