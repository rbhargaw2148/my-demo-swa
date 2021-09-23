import Step from './Step'

function StepNavigation(props) {
    const {updateStep, selectedWidget} = props;
    return (
        <div className="stepwrapper">
            {props.labelArray.map((item, index) => 
            <Step key={index} index={index} path={item.path} section={item.section} label={item.title} icon={item.icon} selected={selectedWidget === item.section} updateStep={updateStep} />
            )}
        </div>
    )
}

export default StepNavigation
