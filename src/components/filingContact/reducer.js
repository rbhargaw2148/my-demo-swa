const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  agency: "",
  
};

export function filingContactReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_FILING_CONTACT":
      return state
   
    default:
      return state;
  }
}
