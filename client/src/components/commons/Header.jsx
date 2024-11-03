import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from '../../assets/img/heroSlider/1.jpg';
import Imagen2 from '../../assets/img/heroSlider/2.jpg'
import Imagen3 from '../../assets/img/heroSlider/3.jpg'


const Header = () => {
  return (
    <Carousel>
    <Carousel.Item className='item-carousel'>
      <img
        className="d-block w-100"
        src={Imagen1}
        alt="First slide"
      />

    </Carousel.Item>
    
    <Carousel.Item className='item-carousel'>
      <img
        className="d-block w-100"
        src={Imagen2} 
        alt="Second slide"
      />
 
    </Carousel.Item>
    
    <Carousel.Item className='item-carousel'>
      <img
        className="d-block w-100"
        src={Imagen3} 
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  )
}

export default Header