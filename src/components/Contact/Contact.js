import { BeakerIcon, ClockIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid'
import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='container'>
            <h1>Contact Us</h1>
            <h2>Get Touch With Us</h2>
            <div className='contact-content mt-5' >
            <div>
                <h3>   <PhoneIcon className=" icon" /></h3>
                <h5>Quick Contact</h5>
                <p>Ph: +321 456 78 9012</p>
            </div>

            <div >

                <h3><LocationMarkerIcon className='icon'></LocationMarkerIcon> </h3>
                <h5>Come to See Us</h5>
                <p>2/10 Bot Tola Street ,
                    Dhaka</p>
            </div>
            <div>

                <h3><ClockIcon className='icon'></ClockIcon> </h3>
                <h5>Office Schedule</h5>
                <p>Monday to Saturday: 09.00am to 06.00pm
                    <br />
            
                    Sunday : Closed</p>
            </div>
            </div>
        </div>
    );
};

export default Contact;