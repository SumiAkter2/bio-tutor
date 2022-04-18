import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';


const Register = () => {
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
const navigate=useNavigate();
    const navigateLogin=()=>{
        navigate('/login');

    }
if(user){
    navigate('/home');
}

    const handleRegister= async (event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
    

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('Updated profile');
    navigate('/home');
}
    
    return (  
        <div className='register-form mt-2 container'>
           <h1 className=' my-5 '>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter your Name'required />
                <br />
                <input type="email" name="email" id="" placeholder='Enter your email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Enter your password' required />
                <br />
                <input className='w-50 mx-auto bg-dark text-white fs-5' type="submit" value="Register" />
               
            </form>
            <p className=' mt-4 pe-auto ' onClick={navigateLogin}>Already have an account?<Link className='text-decoration-none' to={'/login'}>Please LogIn</Link></p>
      </div>
    );
};

export default Register;