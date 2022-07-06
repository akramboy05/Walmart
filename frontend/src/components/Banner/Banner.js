import React  from 'react';
import "./Banner.css"
import {Carousel} from "react-bootstrap"
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/1 (5).jpg"
// import banner3 from "../../assets/1(4).jpg"

function Banner() {
   return (
    <Carousel className='carus'>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-1000"
        src={banner1}
        alt="First slide"
      />
      <Carousel.Caption className='caption'>
      <div className="text_div">
       <h3>Second slide label</h3>
        <p>Playhouses, trampolines, bikes, and more to make them happy.</p>

         <button>Shop now</button>
       </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={banner2}
        alt="Second slide"
      />
      <Carousel.Caption className='caption'>
       <div className="text_div">
       <h3>Second slide label</h3>
        <p>Playhouses, trampolines, bikes, and more to make them happy.</p>

         <button>Shop now</button>
       </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner3}
        alt="Third slide"
      />
      <Carousel.Caption className='caption'>
      <div className="text_div">
       <h3>Second slide label</h3>
        <p>Playhouses, trampolines, bikes, and more to make them happy.</p>

         <button>Shop now</button>
       </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   )
}

export default Banner;
