export const saveIssuerContact = (issuerContact) =>{
    return (dispatch) => {
        dispatch({
            type: "SAVE_ISSUER_CONTACT",
            payload: issuerContact
        })
    }
}