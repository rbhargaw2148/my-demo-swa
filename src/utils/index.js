export const basicValidation = (validator, value) =>{
  const emailRe = /^[^@]+@[^@]+\.[^@]+$/;
  //const minRe = /min:[0-9]+$/;
  //const maxRe = /max:[0-9]+$/;
  const zipRe = /\d{5}-?(\d{4})?/;
  switch (validator) {
    case "required":
      return value.length > 0 ? "" : "This field is required";
    case "email":
      return emailRe.test(value) ? "" : "Please enter a valid email";
    case "zipCode":
      return zipRe.test(value) ? "" : "Please enter a valid zipcode";
    case validator.match(/^minLength:/)?.input:
      const min = validator.split(":")[1];
      return value.length >= min
        ? ""
        : `This value needs to be at least ${min} characters`;
    //case maxRe.test(validator):
    case validator.match(/^maxLength:/)?.input:
      const maxlength = validator.split(":")[1];
      return value.length <= maxlength
        ? ""
        : `This value cannot be more than ${maxlength} characters`;
    case validator.match(/^length:/)?.input:
      const length = validator.split(":")[1];
      return value.length === length
        ? ""
        : `This value should contain ${length} characters`;
  //   case validator.match(/^max:/)?.input:
  //     const max = validator.split(":")[1];
  //     const maxRange = max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //     return value*1 <= max*1
  //         ? ""
  //         : `This value cannot be more than ${maxRange}`;
    default:
      return "";
  }
}

export const runValidations = e => {
  const value = e.target.value;
  //const name = e.target.name;
  const validations = e.target.dataset['validations'] ? e.target.dataset['validations'].split(',') : [];
  let validationRes;
  for (let i = 0; i < validations.length; i++) {
    const validator = validations[i];
    if (typeof validator === "string")
      validationRes = basicValidation(validator, value);
    if (validationRes) break;
  }
  let errorMessage = validationRes || null
  return errorMessage;
}

export const validateFormFields = elements => {
  let formErrors = {};
  Array.prototype.forEach.call(elements, (element) => {
    if( element.type === 'radio') {
      const getSelectedValue = document.querySelector( 'input[name="'+element.name+'"]:checked'); 
      if(getSelectedValue == null) { 
        formErrors[element.name] = "Please select one option"
      }  
    } else {
    const validations = element.dataset['validations'] ? element.dataset['validations'].split(',') : null;
    let validationRes;
    if( validations ) {
        for (let i = 0; i < validations.length; i++) {
        const validator = validations[i];
        if (typeof validator === "string")
            validationRes = basicValidation(validator, element.value);
        if (validationRes) break;
        }
        if(validationRes) {
            formErrors[element.name] = validationRes
        }
    }
  }
  })
  return formErrors;
}

export const changeKeyObjects = (arr, replaceKeys) => {
    return arr.map(item => {
      const newItem = {};
      Object.keys(item).forEach(key => {
        newItem[replaceKeys[key]] = item[[key]];
      });
      return newItem;
    });
};

export const getSelectedKeyIndex = (arr, key, value) => {
  return arr.findIndex(p => p[key] === value)
}

