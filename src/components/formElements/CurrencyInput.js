import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
//import classes from './Input.module.css'
import {AiFillQuestionCircle} from 'react-icons/ai'
import { MDBTooltip } from 'mdbreact';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 11, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const CurrencyInput = ({ 
    maskOptions, 
    label, 
    error, 
    onBlur,
    validations, 
    isrequired,
    helpText,
    ...inputProps 
}) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })

  return (
    <>
      {label && <label> {isrequired && <span className="required">*</span>}{label}: 
      <MDBTooltip domElement tag="span" placement="right">
            <span>{' '}<AiFillQuestionCircle className="help-icon"/></span>
            <span>{helpText}</span>
        </MDBTooltip>
      </label>
      }
      <MaskedInput mask={currencyMask} {...inputProps} 
        onBlur={onBlur}
        data-validations={validations}
        style={error && {border: `solid 1px red`}}/>
        {error && <p className="error">{ error }</p>}
    </>)
}

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
}

CurrencyInput.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.bool,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowLeadingZeroes: PropTypes.bool,
    integerLimit: PropTypes.number,
  }),
}

export default CurrencyInput