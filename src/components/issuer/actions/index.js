export const saveIssuer = (issuer) =>{
    return (dispatch) => {
        dispatch({
            type: "SAVE_ISSUER",
            payload: issuer
        })
    }
}