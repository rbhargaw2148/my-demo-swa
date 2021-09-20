import React from 'react'

function Step(props) {
    const {index,section, label,icon, updateStep} = props;

    return (
        <div className={"stepBlock" + (props.selected ? " selected" : '')}>
            <div className="circleWrapper" onClick={()=>updateStep(index+1, section)}>
                {/* <div className="circle"> */}
                <div className="widgetIcon">
                    {icon}
                </div>
            </div>
            <span>{label}</span>
        </div>
    )
}

export default Step
