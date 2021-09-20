import { Table, Form } from 'react-bootstrap';
import {useState} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Card  from '../../ui/Card'
import FinancialPurposeDetails from './financialPurposeDetails';
const FinancingPurposeMaintenance = () => {
    const history = useHistory();
    const {pathname} = useLocation();
    const [debtItemList, setDebtItemList] = useState(null);
    const [selectedCategoryCode, setSelectedCategoryCode] = useState("");
    const [selectedCategoryValue, setSelectedCategoryValue] = useState(null);

    const financingPurposeCategories = [{
        code: 'I',
        desc: 'Commercial and Industrial Development'
    },
    {
        code: 'M',
        desc: 'Hospital and Health Care Facilities'
    },
    {
        code: 'P',
        desc: 'Capital Improvements and Public Works'
    },
    {
        code: 'R',
        desc: 'Redevelopment'
    },
    {
        code: 'Z',
        desc: 'Other'
    }]

    const handleChange = (e) => {
        let financeCategoryCode = e.target.value;
        const selectedIndex = e.target.selectedIndex;
        const text = e.target[selectedIndex].text
        setSelectedCategoryCode(financeCategoryCode);
        setSelectedCategoryValue(text);

        // switch (debtType) {
        //     case "notes":
        //         setDebtItemList(Notes);
        //         break;
        //     case "bonds":
        //         setDebtItemList(Bonds);
        //         break;
        //     case "other":
        //         setDebtItemList(Other);
        //         break;
        //     case "commercial_paper":
        //         setDebtItemList(Commercial_Paper);
        //         break;
        //     case "certification_of_participation":
        //         setDebtItemList(Certification_Of_Participation);
        //         break;
        //     default:
        //         setDebtItemList(null);
        // }
    }

    const showDetails = (code) => {
        history.push(pathname+'/'+code);
    }

    return (

        <Card>
            <div className="form">
                <h1>Financing Purpose Maintenance</h1>

                <div>
                    <label>Financing Purpose Group: </label>
                <Form.Select as="select" onChange={(e)=>handleChange(e)} value={selectedCategoryCode}>
                        <option>select</option>
                        
                        {financingPurposeCategories.map((item, i) =>{
                            return (<option key={i} value={item.code} >{item.desc}</option>);
                        }
                        ) }
                </Form.Select>
                </div>

                {selectedCategoryCode && <FinancialPurposeDetails groupCode={selectedCategoryCode} groupValue={selectedCategoryValue}/>}
                {/* <Table bordered striped>
                    <tbody>
                    {debtTypes.map((item, i) => {
                    return <tr key={i} style={{cursor: 'pointer'}} onClick={()=>showDetails(item.code)}><td>{item.desc}</td></tr>
                    })}
                    </tbody>
                </Table> */}
            </div>
            
        </Card>
    )
}

export default FinancingPurposeMaintenance
