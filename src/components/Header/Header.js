// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 className='text-danger'>Header</h1>
            <Carousel fade interval={1000} >
  <Carousel.Item>
    <img
      className="  img-slider"
      src="dna-ge9393eea3_640.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='carousel-text'>
      <h3 style={{fontSize:'40px'}}>Learn Biology to Build Your  skill</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-slider"
      src="pexels-egor-kamelev-920160.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className='carousel-text'>
      <h3 style={{fontSize:'40px'}}>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-slider"
      src="cells-g079e17155_640.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className='carousel-text'>
      <h3 style={{fontSize:'40px'}}>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};



export default Header;