import React, {useState} from 'react'
import { Form, Row, Col, Modal, Button} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
//import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt } from 'react-icons/fa'

const DashboardSearchModal = ({onModalClose}) => {
    const fromDate = new Date();
    
    const defaultToDate = new Date();
    const defaultFromDate = fromDate.setMonth(fromDate.getMonth() - 3);
    //const [toDate, setToDate] = useState(new Date());

    const [dateRange, setDateRange] = useState({
        toDate: defaultToDate,
        fromDate: defaultFromDate
    })

    const handleChange = (e, k) => {
        setDateRange({...dateRange, [k] : e })
    }

    const CustomInput = React.forwardRef((props, ref) => {
        return (
          <div className="form-control">
              <span><label onClick={props.onClick} ref={ref}>
                {props.value || props.placeholder}
                </label></span>
            {/* <input type="text" className="form-control" ref={ref}
                defaultValue={props.value || props.placeholder} onClick={props.click}/> 
            <FaCalendarAlt onClick={props.onClick} className="date-picker-icon"/>*/}
            <FaCalendarAlt onClick={props.onClick} style={{float: 'right', marginTop: '0.3em'}}/>
          </div>
        );
    });
    return (
        <>
            <Modal show={true} onHide={onModalClose} backdrop="static" keyboard={false}  size="lg">
            <Modal.Header closeButton>Search Criteria</Modal.Header>
            <Modal.Body>
              <div className="control">
                <label>Issue Name Contains:</label>
                <input type="text" />
              </div>
              <div className="">
                <label>Filing Date Range: </label>
                {/* <input type="date" /> to <input type="date" id="todate" selected={date} onChange={(e)=>handleChange(e)}/> */}
             <Row><Col md={12}><span className="required"> * </span> From<DatePicker 
                key="1"
                selected={dateRange.fromDate}
                dateFormat="M/d/yyyy" 
                name="fromDate"
                onChange={(e)=>handleChange(e, 'fromDate')} 
                customInput={<CustomInput handleChange={handleChange}/>}/>
                <span className="required"> * </span> to
                <DatePicker 
                key="2"
                selected={dateRange.toDate}
                name="toDate"
                onChange={(e)=>handleChange(e, "toDate")}
                dateFormat="M/d/yyyy" 
                customInput={<CustomInput handleChange={handleChange}/>}/>
                </Col>
                </Row>
              </div>
              <div>
                <Form.Check type="checkbox" label="Retired?" />
              </div>
              <div>
                <button
                  type="button"
                  className="link-button"
                  >Clear Search
                </button>
              </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>onModalClose()}>Cancel</Button>
                <Button onClick={()=>onModalClose()}>Go</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DashboardSearchModal
