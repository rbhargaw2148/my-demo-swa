const initialState = {
  issuerName: "",
  issueName: "",
  projectName: "",
  //authReducedAmount: "",
  propSaleDate: "",
  principleSold: "",
  validationAction: "",
  DebtRepayable: ""
};

export function issuerReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ISSUER":    
        return {
          ...state, 
          issuerName: action.payload.issuerName,
          issueName: action.payload.issueName,
          projectName: action.payload.projectName,
          propSaleDate: action.payload.propSaleDate,
          principleSold: action.payload.principleSold,
        }
      
    default:
      return state;
  }
}
