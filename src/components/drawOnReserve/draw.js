import {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select'
import Card from '../ui/Card'

const Draw = (props) => {
    const [amountFieldLabel, setAmountFieldLabel] = useState('Amount');
    const [showAmountField, setShowAmountField] = useState(false);
    const drawOptions = [
        {value: 'F', label: 'Draw on Reserve'},
        {value: 'D', label: 'Default'},
        {value: 'R', label: 'Replenishment of Draw on Reserve(Voluntary Disclousure)'},
    ]

    const handleDrawTypeSelection = (e) => {
        if(e.value === 'F') {
            setAmountFieldLabel('Amount of Draw on Reserve');
        }else if(e.value === 'D') {
            setAmountFieldLabel('Amount not paid but due in the Default');
        } else if(e.value === 'R') {
            setAmountFieldLabel('Amount of Relenishment');
        }
        setShowAmountField(true);
    }

    const validateForm = () => {
        props.openWidget('filingContact');
    }
    return (
        <Card>
            <div className="form">
                <h1>Draw</h1>
                <div>
                    <div>
                        <label><span className="required">*</span>Draw Type:</label>
                        <Select options={drawOptions} onChange={(e)=>handleDrawTypeSelection(e)}/>
                    </div>
                    <div>
                        <label><span className="required">*</span>Date Draw on Reserve/Default/Replenishment Occurred:</label>
                        <Form.Control type="date" />
                    </div>
                    { showAmountField && <div>
                        <label><span className="required">*</span>{amountFieldLabel}: </label>
                        <Form.Control type="text" />
                    </div>
                    }
                </div>

                <div className="btn-div">
                <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
                </div>

            </div>
        </Card>
    )
}

export default Draw
