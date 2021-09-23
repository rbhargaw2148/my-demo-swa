import {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import Card from '../ui/Card'
//import {useHistory} from 'react-router-dom'

const TypeOfDebt = (props) => {
    const [debtItemList, setDebtItemList] = useState(null);
    const [selectedDebtGroup, setSelectedDebtGroup] = useState('');
    const [showOtherTextField, setShowOtherTextField] = useState(false);
    const [debtType, setDebtType ] = useState({
        code: "",
        description: "",
        otherText: ""
    })
    //const history = useHistory();
    const validateForm = (e) => {
        props.openWidget('sourceOfRepayment');
        //history.push("/reports/report-proposed-sale/source-of-repayment")
    }

    const debtTypes = {
        'notes': 'Notes',
        'bonds': 'Bonds', 
        'other': 'Other',
        'commercial_paper': 'Commercial Paper',
        'certification_of_participation': 'Certificate of Participation/Leases'
    };
    const Notes = {
        "BAN":"Bond anticipation note",
        "CRN":"Conduit revenue note",
        "GAN":"Grant anticipation note",
        "GON":"General obligation note",
        "OTHN" : "Other note",
        "PN":"Promissory Note",
        "RAN":"Revenue anticipation note",
        "RAW":"Revenue anticipation warrant",
        "TALN":"Tax allocation note",
        "TAN":"Tax anticipation note",
        "TRAN":"Tax and revenue anticipation note"
    }

    const Bonds = {
        "CRB":"Conduit revenue bond",
        "GOB":"General obligation bond",
        "LTOB": "Limited tax obligation bond",
        "LTRB":"Limited tax revenue bond",
        "OTHB":"Other bond",
        "PERB":"Public enterprise revenue bond",
        "PLRB":"Public lease revenue bond",
        "POB":"Pension obligation bonds",
        "RB":"Revenue bond",
        "RRB":"Rate Reduction Bond (GC 6588.7)",
        "SAB":"Special assessment bond",
        "STRB":"Sales tax revenue bond",
        "TAB":"Tax allocation bond"
    }

    const Other = {
       "LOAN" : "Loan from a bank or other institution",
       "MKRL" : "Marks-Roos Loan",
       "OTH" : "Other Debt",
       "PLF" : "PLF Debt",
       "STAL" : "State Agency Loan",
       "STX" : "Sales Tax Election",
    }

    const Commercial_Paper = {
        "CP" : "Commercial paper"
    }

    const Certification_Of_Participation = {
       "CL" : "Capital Lease",
       "COPL" : "Certificates of Participation/Leases"
    }

    const handleChange = (e) => {
        let debtType = e.target.value;
        setSelectedDebtGroup(debtType);
        switch (debtType) {
            case "notes":
                setDebtItemList(Notes);
                break;
            case "bonds":
                setDebtItemList(Bonds);
                break;
            case "other":
                setDebtItemList(Other);
                break;
            case "commercial_paper":
                setDebtItemList(Commercial_Paper);
                break;
            case "certification_of_participation":
                setDebtItemList(Certification_Of_Participation);
                break;
            default:
                setDebtItemList(null);
        }
    }

    const handleDebtTypeChange = (e) => {
        const { value } = e.target;
        if(['OTH', 'OTHB', 'OTHN'].includes(value) ){
            setShowOtherTextField(true);
        } else {
            setShowOtherTextField(false);
        }

        setDebtType(prevState => ({
            ...prevState,
            code: value
        }));
       // console.log(debtType);
    }
    return (
        <Card>
            <div className="form">
                <label style={{fontSize: '16px', marginBottom: '0.5rem'}}>Debt Group: </label>
                <br />
                <Form.Select as="select" onChange={(e)=>handleChange(e)} value={selectedDebtGroup}>
                        <option>select</option>
                        
                        {(Object.keys(debtTypes).length !== 0) && Object.entries(debtTypes).map(([k, val]) =>{
                            return (<option key={Math.random()} value={k} >{val}</option>);
                        }
                        ) }
                </Form.Select>
                <br />

                <div style={{marginTop: '10px'}}>
                {debtItemList  &&  <label> Type: </label>}
                {debtItemList && Object.entries(debtItemList).map(([k, val]) => {
                        return(<Form.Check key={Math.random()} name="debtItem" type="radio"  value={k} label={val} checked={k===debtType.code ? true : false} onChange={(e)=>handleDebtTypeChange(e)}/>);
                    })
                }
                </div>

                {showOtherTextField && <div form="control" style={{width: '50%'}}>
                    <label>Please specify if "Other" was checked above: </label><Form.Control type="text" /> </div>}
                
                <div className="btn-div">
                    <Button className="button">Back</Button>
                    <Button className="fright button" type="button" onMouseDown={(e)=>validateForm(e)}>Next</Button>
                </div>    
            </div>
        </Card>
    )
}

export default TypeOfDebt
