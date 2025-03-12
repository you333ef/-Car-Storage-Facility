import React from 'react'
import stylest from './people.module.css';
import bg_left from '../assets/images/left_quit.svg'
import bg_right from '../assets/images/right_quit.svg'
import girl from '../assets/images/imagegirl.svg'
import poy from '../assets/images/imagepoy.svg'
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Pepole = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
      };
      
  return (
    <div className={`stylest.Testimonials mt-5 ${stylest.people}`}>
 <div className={` container ${stylest.Taxes}`}>
 <button className={`${stylest.HOWbtn}`}>WHY CHOOSE US</button>
 <h3 className={`text-center m-auto p-3 ${stylest.peole_TITLE}`}>What peole say about us?</h3>
 <img src={bg_left}alt="" className={stylest.bg_left} />
 <img src={bg_right}alt=""  className={stylest.bg_right}/>
 </div>
 <div className="container ">
  <div className={`row justify-content-center ${stylest.TETO}`}>
  <Slider {...settings} className="col-md-12 col-sm-12 col-12 col-lg-6">
  <div>
    <div className={`border-0 shadow-sm p-3 d-flex flex-md-row align-items-center jc-center m-auto d-block text-center ${stylest.card}`}>
      <img src={poy} alt="User" className={`rounded img-fluid ${stylest.testimonial_img}`} />
      <div className="card-body">
        <h2 className="fw-bold">
          5.0 <span className="text-muted fs-5">stars</span>
        </h2>
        <div className={`mb-2 text-warning ${stylest.stars}`}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-muted">
          "I feel very secure when using caretall's services. Your customer care 
          team is very enthusiastic and the driver is always on time."
        </p>
        <h5 className="fw-bold">Charlie Johnson</h5>
        <p className="text-muted small">From New York, US</p>
      </div>
    </div>
  </div>

  <div>
    <div className={`border-0 shadow-sm p-3 d-flex flex-md-row align-items-center ${stylest.card}`}>
      <img src={girl} alt="User" className={`rounded img-fluid ${stylest.testimonial_img}`} />
      <div className="card-body jc-center m-auto d-block text-center">
        <h2 className="fw-bold">
          5.0 <span className="text-muted fs-5">stars</span>
        </h2>
        <div className={`mb-2 text-warning ${stylest.stars}`}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="text-muted">
          "I feel very secure when using caretall's services. Your customer care 
          team is very enthusiastic and the driver is always on time."
        </p>
        <h5 className="fw-bold">Charlie Johnson</h5>
        <p className="text-muted small">From New York, US</p>
      </div>
    </div>
  </div>
</Slider>

  </div>
</div>

    
    
    
    </div>
  )
}

export default Pepole