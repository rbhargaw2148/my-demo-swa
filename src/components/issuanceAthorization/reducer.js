const initialState = {
  authorizations: [ {
    orgAuthAmount: "",
    ReplenishedAuthAmount: "",
    authorizationDate: "",
    authorityReducedAmount: "",
    authorizationName: "",
    netChange: "",
}]
};

export function issuanceAuthorizationReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_AUTHORIZATION":    
        const state = [...state.authorizations, {
            orgAuthAmount: "",
            ReplenishedAuthAmount: "",
            authorizationDate: "",
            authorityReducedAmount: "",
            authorizationName: "",
            netChange: "",
        }]
        return state;
      
    default:
      return state;
  }
}
