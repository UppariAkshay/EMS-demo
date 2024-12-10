import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState} from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const onSubmitLoginForm = (event) => {
        event.preventDefault()

        handleLogin(email, password)
    }

    return (
        <div className='container'>
        <h1>Login</h1>
        <form onSubmit={(event) => onSubmitLoginForm(event)} className='border border-primary-subtle p-3 rounded-3'>
            <p>{loginError}</p>
            <label htmlFor='emailInput' className='form-label'>Email</label>
            <input onChange={(event) => setEmail(event.target.value)} value={email} id='emailInput' className='form-control' type='email' placeholder='Enter your email' />
            
            <label htmlFor='passwordInput'>Password</label>
            <input onChange={(event) => setPassword(event.target.value)} value={password} id='passwordInput' className='form-control' type='password' placeholder='Enter your password' />
            <button type='submit' className='btn btn-info'>Login</button>
        </form>
        
        </div>
    )
}

export default Login