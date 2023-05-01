import React, { Fragment, useState } from 'react'
import './login.css';
// import {CiMail,CiLock} from 'react-icons/ci'
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Action/Employee';
const Login = () => {
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(login(email));
    }
    return (
    <Fragment>
        <div className="container">
        <div className="Heading">Login</div>
        <div className="loginBox">
          <div className="email">
           <input 
                type="email"
                required 
                value={email}
                placeholder='Enter Your Email'
                onChange={(e)=>setEmail(e.target.value)} />
           </div>
           <button onClick={submitHandler} type='submit'>
               Login
           </button>
        </div>
        </div>
    </Fragment>
  )
}

export default Login;
