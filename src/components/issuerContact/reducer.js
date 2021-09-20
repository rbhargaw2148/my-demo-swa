const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  title: "",
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  addressLine4: "",
  city: "",
  state: "",
  zipCode: "",
  issuerLocatedIn: "",
  areaCode: "",
  phoneNumber: "",
  phoneExt: "",
};

export function issuerContactReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ISSUER_CONTACT":
      return state
   
    default:
      return state;
  }
}
