import React from 'react'

const Login = () => {
    return (

        
        <div className="login">
            <form>
            <h3>Sign In</h3>

            <div style={{marginBottom: '10px'}}>
            <div>
                <label className="form-label">Username</label>
                <input type="text" className="form-control" placeholder="Enter username"/>
            </div>

            <div>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            </div>

            <button type="submit" className="custom-button" >Sign In</button>
            </form>
            </div> 
    )
}

export default Login
