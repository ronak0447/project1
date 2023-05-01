import React, { Fragment, useEffect, useState } from 'react';
import './signup.css'
// import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import  {toast} from 'react-hot-toast';
import { register } from '../../Redux/Action/Employee';

const Signup = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [address,setAddress] = useState('');
    const {message,error} =useSelector((state)=>state.employee);
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type:'clearError'});
        }
        if(message){
            toast.success(message);
            dispatch({type:'clearMessage'});
        }
    },[dispatch,error,message]);
    const formSubmitHandler = (e) =>{
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('name',name)
        myForm.set('email',email)
        myForm.set('phoneNo',phoneNumber)
        myForm.set('address',address)

        dispatch(register(myForm));
    }
    return (
        <Fragment>
            <div className='container'>
                <div className="Heading">Sign-Up</div>
                <form onSubmit={formSubmitHandler} className="signupBox">
                    <div className="name">
                    <input type="text"
                           required  
                           value={name}
                           onChange={(e)=>setName(e.target.value)}
                           placeholder='Enter Your Name'/>

                    </div>
                    <div className="emails">
                    <input 
                           type="email" 
                           required  
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                           placeholder='Enter Your Email'/>

                    </div>
                    <div className="phoneNumber">
                    <input 
                           type="text" 
                           required  
                           value={phoneNumber}
                           onChange={(e)=>setPhoneNumber(e.target.value)}
                           placeholder='Enter Your Phone Number'/>

                    </div>
                    <div className="add">
                    <input 
                           type="text" 
                           required  
                           value={address}
                           onChange={(e)=>setAddress(e.target.value)} 
                           placeholder='Enter Your Address'/>
                    </div>
                    {/* <Link to={'/login'}> */}
                    <button >
                        SignUp
                    </button>
                    {/* </Link> */}
                </form>
            </div>
        </Fragment>
    )
}

export default Signup;
