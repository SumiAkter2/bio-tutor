import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container mt-5'>
            <h1>My Services</h1>
           <div className='services-container gap-4 mt-5'>
           {
                services.map(service=><Service key={service._id} 
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;