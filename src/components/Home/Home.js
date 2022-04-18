import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import CustomLink from '../CustomLink/CustomLink';
import './Home.css';
const Home = () => {
    const [user]=useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
       <div>
           <div className='d-flex justify-content-between  navbar'>
           <h1>   <i className="fas fa-camera fa-xs"></i> Bio Tutor</h1>
            <nav className='d-flex '>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
           {
           user ?  <button className='btn btn-link text-white' onClick={handleSignOut}>sign out</button>:
           <CustomLink to='/login'>LogIn</CustomLink>}
            <CustomLink to='/about'>About</CustomLink>
            {/* <CustomLink to='/register'>Register</CustomLink> */}
            </nav>
            
       </div>
      

       </div>
    );
};

export default Home;