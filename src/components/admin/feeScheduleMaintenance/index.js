import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Card from '../../ui/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import EditFeeForm from './editFeeForm'
import AddFeeForm from './addFeeForm'

const FeeScheduleMaintenance = () => {
    const { SearchBar, ClearSearchButton } = Search;
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editFeeInfo, setEditFeeInfo] = useState([])
    const [openAddFeeeModal, setOpenAddFeeModal] = useState(false);

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
        setOpenEditModal(true);
        setEditFeeInfo(row);
    }
    const columns = [{
        dataField: 'effectiveStartDate',
        text: 'Effective Start Date',
        sort: true
      }, {
        dataField: 'effectiveEndDate',
        text: 'Effective End Date',
        sort: true
      }, {
        dataField: 'minAmount',
        text: 'Min Amount',
        sort: true
      },{
        dataField: 'maxAmount',
        text: 'Max Amount',
        sort: true
      },{
        dataField: 'createdAt',
        text: 'Created At',
        sort: true
      },{
        dataField: 'createdBy',
        text: 'Created By',
        sort: true
      }, { 
        dataField: "",
        text: "", 
        formatter: viewFormatter
      }
    ];

    const Fees = [
        {
            'id': 1,
            'effectiveStartDate': '07/01/2018',
            'effectiveEndDate': '06/30/2019',
            'minAmount': '120',
            'maxAmount': '300',
            'createdAt': '06/15/2018',
            'createdBy': 'J.Doe'
        },
        {
            'id': 2,
            'effectiveStartDate': '07/01/2019',
            'effectiveEndDate': '06/30/2020',
            'minAmount': '150',
            'maxAmount': '330',
            'createdAt': '06/19/2019',
            'createdBy': 'T.Taylor'
        },
        {
            'id': 3,
            'effectiveStartDate': '07/01/2020',
            'effectiveEndDate': '06/30/2021',
            'minAmount': '180',
            'maxAmount': '350',
            'createdAt': '06/11/2020',
            'createdBy': 'C.Sophie'
        }
    ]
    return (
        <Card>
            <div className="form">
                <h1>Fee Schedule Maintenance</h1>

                <ToolkitProvider
                keyField="id"
                data={ Fees}
                columns={ columns }
                pagination={ paginationFactory() }
                search
                >
                {
                    props => (
                    <div>
                        <SearchBar { ...props.searchProps } style={{margin: 0}}/>
                        <ClearSearchButton { ...props.searchProps } style={{border: '1px solid gray'}}/>
                        <button
                            className="btn bg-success text-light rounded"
                            style={{float: 'right'}}
                            onClick={()=>setOpenAddFeeModal(true)}  >
                            Add New Fee
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
            
            {openAddFeeeModal && <AddFeeForm onModalClose={()=>setOpenAddFeeModal(false)}/>}
            {openEditModal && <EditFeeForm onModalClose={()=>setOpenEditModal(false)} feeInfo={editFeeInfo} />}
        </Card>
    )
}

export default FeeScheduleMaintenance
