import {Form} from 'react-bootstrap'
import Header from '../common/Header'
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [details, setDetails] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();
    

    const submitHandler = () => {
        sessionStorage.setItem('user', JSON.stringify(details));
        history.push('/dashboard');
    }

    return (
        <div>
            <Header/>
            <div className="login">
            <form onSubmit={submitHandler}>
            <h3>Sign In</h3>

            <div style={{marginBottom: '10px'}}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Enter username" value={details.username} onChange={(e)=>setDetails({...details, username: e.target.value})}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="form-control" placeholder="Enter password" value={details.password} onChange={(e)=>setDetails({...details, password: e.target.value})}/>
            </Form.Group>
            </div>

            <button type="submit" className="custom-button" >Sign In</button>
            </form>
            </div> 
        </div>
    )
}

export default Login
