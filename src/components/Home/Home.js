import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Home.css';
const Home = () => {
    return (
       <div>
           <div className='d-flex justify-content-between  navbar'>
           <h1>   <i className="fas fa-camera fa-xs"></i> Learn with Biology</h1>
            <nav className='d-flex '>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
            <CustomLink to='/login'>Log In</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            </nav>
            
       </div>
      

       </div>
    );
};

export default Home;