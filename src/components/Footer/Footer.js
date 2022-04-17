import React from 'react';
import './Footer.css'
const Footer = () => {
    const today=new Date();
    const year=today.getFullYear()
    return (
       <footer className='footer-container mt-5'>
           <p className='p-4 '>Copyright &copy; reserved {year} </p>
       </footer>
    );
};

export default Footer;