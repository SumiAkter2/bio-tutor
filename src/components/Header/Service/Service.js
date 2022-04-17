import React from 'react';
import './Service.css'
const Service = (props) => {
    const{name,price,picture,description}=props.service;
    return (
        <div className='service-container '>
           
            <img className='' src={picture} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <h5>Fee: {price}</h5>
        </div>
    );
};

export default Service;