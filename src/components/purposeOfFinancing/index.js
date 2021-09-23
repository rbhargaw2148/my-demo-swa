import { useState } from 'react'
import Card from '../ui/Card'
import {Form, Button} from 'react-bootstrap'
import classes from './PurposeOfFinancing.module.css'
//import { useHistory } from 'react-router-dom'

const PurposeOfFinancing = (props) => {
    //const history = useHistory();
    
    const [purposeCount, setPurposeCount] = useState(1);
    const [purposes, setPurposes] = useState([
        {
            type: "",
            percentage: "",
        }
    ])

    const financingCategory = {
        'I' : 'Commercial and Industrial Development',
        'M' : 'Hospital and Health Care Facilities',
        'P'	: 'Capital Improvements and Public Works',
        'R' : 'Redevelopment',
        'Z' : 'Other'
    }
    const purposesOfFinancing = {
        'CFIF': 'Cash flow, interim financing   (CFIF)',
        'PIF': 'Project, interim financing   (PIF)',
        'CUF': 'College, university facility   (CUF)',
        'KSCH': 'K-12 school facility   (KSCH)',
        'OMED': 'Other, multiple educational uses   (OMED)',
        'SLC': 'Student loans   (SLC)'
    }
    const addTypeOfPurpose = () => {
        setPurposeCount(purposeCount + 1);
        const purposesInfo = [...purposes, {
            type: "",
            percentage: "",
        }];
        setPurposes(purposesInfo)
    }

    const handleChange = (e) => {

    }
    const validateForm = (e) => {
        props.openWidget('uploadDoc');
        //history.push("/reports/report-proposed-sale/upload-documents");
    }

    return (
        <Card>
            <Form className="form">
            <h3>Purpose(s) of Financing</h3>
                <hr />
                <div>
                {/* <span style={{float: "right"}}><button type="button" name="remove" title="Remove this component" onClick={()=>removeAuthorization(i)}>x</button></span><br /> */}
                </div>

                <table className={classes.ctable}>
                    <thead>
                        <tr>
                            <th>Financing Purpose Category</th>
                            <th className="purposeoffinancing">Types of Purpose of Financing</th>
                            <th className="percentage">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                    {purposes.map((item, i) => {
                    return (<tr key={Math.random()}>
                            <td className={classes.purposeoffinancing}>
                                <Form.Select onChange={(e)=>handleChange(e)} >
                                        <option>select</option>
                                        
                                        {(Object.keys(financingCategory).length !== 0) && Object.entries(financingCategory).map(([k, val]) =>{
                                            return (<option key={k} value={k}>{val}</option>);
                                        }
                                        ) }
                                </Form.Select>
                            </td>
                            <td className={classes.purposeoffinancing}>
                                <Form.Select onChange={(e)=>handleChange(e)} >
                                        <option>select</option>
                                        
                                        {(Object.keys(purposesOfFinancing).length !== 0) && Object.entries(purposesOfFinancing).map(([k, val]) =>{
                                            return (<option key={k} value={k}>{val}</option>);
                                        }
                                        ) }
                                </Form.Select>
                            </td>
                            <td className={classes.percentage}><Form.Control type="text"/></td>
                        </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
                <div style={{float: 'right', display: 'flex'}}><label>Total: </label><input disabled/></div>
            <Button onClick={() => addTypeOfPurpose()}>Add Another Purpose</Button>
            
            <div className="btn-div">
            <Button className="fright" type="button" onMouseDown={(e)=>validateForm(e)}>Next</Button>
            </div>
            </Form>
        </Card>
    )
}

export default PurposeOfFinancing
