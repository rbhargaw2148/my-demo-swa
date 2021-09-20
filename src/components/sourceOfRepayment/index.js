import { Form, Button } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import Card from '../ui/Card'
const SourceOfRepayment = (props) => {
    const history = useHistory();
    const validateForm = (e) => {
        props.openWidget('purposeOfFinancing');
        //history.push("/reports/report-proposed-sale/purpose-of-financing")
    }

    const sources = {
        'BDPR': 'Bond Proceeds (BDPR)',
        'GNFD': 'General Fund of Issuing Jurisdiction (GNFD)', 
        'GRNT': 'Grants (GRNT)',
        'ITGV': 'Intergovernmental Transfers Other Than Grants (ITGV)',
        'LOB': 'Local Obligations (LOB)',
        'OTHS': 'Other (pleasespecify.) (OTHS)',
        'POP': 'Private Obligor Payments (POP)',
        'PRTX': 'Property Tax Revenues (PRTX)',
        'PER': 'Public Enterprise Revenues (PER)',
        'SATR': 'Sales Tax Revenues (SATR)',
        'SA': 'Special Assessments (SA)',
        'SPTR': 'Special Tax Revenues (SPTR)',
        'TI': 'Tax-Increment (TI)',
        'UPC': 'Utility Project Charges (UPC)'
    };
    return (
        <Card>
            <div className="form">
                <h1>Source(s) of Repayment</h1>

                <div>
                {(Object.keys(sources).length !== 0) && Object.entries(sources).map(([key, val]) =>{
                            return (<Form.Check key={key} name="debtItem" type="checkbox"  value={key} label={val} />);
                        }
                ) }
                </div>

                <div className="btn-div">
                    <Button className="button">Back</Button>
                    <Button className="fright button" type="button" onMouseDown={(e)=>validateForm(e)}>Next</Button>
                </div>
            </div>

        </Card>
    )
}

export default SourceOfRepayment
