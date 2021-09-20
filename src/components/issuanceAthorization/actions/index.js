export const addAuthorization = (authorization) =>{
    return (dispatch) => {
        dispatch({
            type: "ADD_AUTHORIZATION",
            payload: authorization
        })
    }
}