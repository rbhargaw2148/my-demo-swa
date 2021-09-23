import {useState} from 'react'
import StepNavigation from './StepNavigation'
import {ProposedProgressBarData} from './ProposedProgressBarData'
import { useLocation} from 'react-router-dom'

function ProgressBar({openSection}) {
    // const history = useHistory();
    const {pathname} = useLocation();
    const [selectedWidget, setSelectedWidget] = useState('issuer');

    function updateStep(step, section) {
        setSelectedWidget(section);
        openSection(section);

    }
    return (
        <div style={{textAlign: 'center'}}>
           <StepNavigation labelArray={ProposedProgressBarData} updateStep={updateStep} pathName={pathname} selectedWidget={selectedWidget}/>
        </div>
    )
}

export default ProgressBar
