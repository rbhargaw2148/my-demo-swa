import React from 'react';
import classes from './Input.module.css';
import {AiFillQuestionCircle} from 'react-icons/ai'
import { MDBTooltip, MDBContainer } from 'mdbreact';

export const FormInput = ({
  name,
  type,
  placeholder,
  onBlur,
  onChange,
  className,
  value,
  error,
  children,
  label,
  validations,
  isrequired,
  disabled,
  helpText,
  ...props
}) => {
  return (
    <div className="control" >
      <label htmlFor={name}>{isrequired && <span className="required">*</span>}{label}: 
       {helpText && <MDBTooltip domElement tag="span" placement="right">
            <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
            <span>{helpText}</span>
        </MDBTooltip>
        }
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className={className}
        data-validations={validations}
        style={error && {border: `solid 1px red`}}
        disabled = {disabled}
      />
      { error && <p className="error">{ error }</p>}
    </div>
  )
}

// FormInput.defaultProps = {
//   type: "text",
//   className: ""
// }

// FormInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['text', 'number', 'password']),
//   className: PropTypes.string,
//   value: PropTypes.any,
//   onChange: PropTypes.func.isRequired
// }

// const Input = (props) => {
//     return (
//         <div className={classes.control}>
//             <label htmlFor={props.name}>{props.label}</label>
//             <input 
//               style={props.formErrors && props.formErrors[props.name]
//                 ? {border: '1px solid red'}
//                 : {}}
//               name={props.name} 
//               id={props.name} 
//               onChange={props.onValueChange} 
//               value={props.value}
//               onBlur = {props.onBlur}
//               data-validations = {props.validations}
//                />
//             {props.formErrors && <span style={{color: "red"}}>{props.formErrors[props.name]}</span>}

//         </div>
//     )
// }

// export default Input
