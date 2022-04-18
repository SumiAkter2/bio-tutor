// import { Carousel } from 'bootstrap';
import './Header.css';
import React from 'react';
import Services from './services/Services';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]=useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <div className='navbar'>
  <div className='d-flex justify-content-between   container'>
           <h1>   <i className="fas fa-camera fa-xs"></i> Bio Tutor</h1>
            <nav className='d-flex '>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
           {
           user ?  <button className='btn btn-link text-white me-2 text-decoration-none fs-5 bg-dark' onClick={handleSignOut}>sign out</button>:
           <CustomLink to='/login'>LogIn</CustomLink>}
            <CustomLink to='/about'>About</CustomLink>
            {/* <CustomLink to='/register'>Register</CustomLink> */}
            </nav>
            
       </div>
           
        
        </div>
    );
};



export default Header;