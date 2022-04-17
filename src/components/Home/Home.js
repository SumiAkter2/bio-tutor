import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
    return (
       <div>
            <nav>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/blog'>Blog</CustomLink>
            <CustomLink to='/login'>Log In</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            </nav>
       </div>
    );
};

export default Home;