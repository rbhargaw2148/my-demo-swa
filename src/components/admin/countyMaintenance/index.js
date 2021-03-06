import { Form } from 'react-bootstrap';
import {useState} from 'react'
// import { useLocation, useHistory } from 'react-router-dom'
import Card  from '../../ui/Card'
import FinancialPurposeDetails from './countiesDetails';
const CountyMaintenance = () => {
    // const history = useHistory();
    // const {pathname} = useLocation();
    const [selectedCategoryCode, setSelectedCategoryCode] = useState("");
    const [selectedCategoryValue, setSelectedCategoryValue] = useState(null);

    const financingPurposeCategories = [{
        code: 'SFB',
        desc: 'San Francisco Bay area'
    },
    {
        code: 'SV',
        desc: 'Sacramento Valley'
    },
    {
        code: 'SD',
        desc: 'San Diego'
    }]

    const handleChange = (e) => {
        let financeCategoryCode = e.target.value;
        const selectedIndex = e.target.selectedIndex;
        const text = e.target[selectedIndex].text
        setSelectedCategoryCode(financeCategoryCode);
        setSelectedCategoryValue(text);
    }

    return (

        <Card>
            <div className="form">
                <h1>County Maintenance</h1>

                <div>
                    <label>Regions: </label>
                <Form.Select as="select" onChange={(e)=>handleChange(e)} value={selectedCategoryCode}>
                        <option>select</option>
                        
                        {financingPurposeCategories.map((item, i) =>{
                            return (<option key={i} value={item.code} >{item.desc}</option>);
                        }
                        ) }
                </Form.Select>
                </div>

                {selectedCategoryCode && <FinancialPurposeDetails groupCode={selectedCategoryCode} groupValue={selectedCategoryValue}/>}
            
            </div>
            
        </Card>
    )
}

export default CountyMaintenance
