// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import './Home.css';
import Services from '../Header/services/Services';
const Home = () => {
   
    return (
       <div>
          <Carousel fade interval={1000} className="container-fluid" >
                <Carousel.Item>
                    <img
                        className="  img-slider "
                        src="bannar-4.jpg"
                        alt="First slide"
                    />
                   <Carousel.Caption>
                       <div className='text-start bannar-text' style={{ fontSize: '40px' }}>
                      <div>
                      <h3 style={{ fontSize: '60px',lineHeight:'5' }}>Need a tutor?</h3>
                       <h2>Marina khan</h2>
                       <p>B.Sc <small>(Hons.) in Botany, </small> DU</p>
                      </div>
                       </div>
                       </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-slider "
                        src="  bannar-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-text'>
                        <h3 style={{ fontSize: '40px' }}>
                        Booking is On!!!!
                        </h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-slider "
                        src=" dna-ge9393eea3_640.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-text'>
                        <h3 style={{ fontSize: '40px' }}> Learn With Biology To Build Your Skills.</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Services></Services>

       </div>
    );
};

export default Home;