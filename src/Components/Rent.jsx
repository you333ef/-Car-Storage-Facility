import React from 'react'
import TOKYO from '../rent.module.css'
import icon1 from '../assets/images/icon1.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3.svg'
import model1 from '../assets/images/model1.svg'
import model2 from '../assets/images/model2.svg'
import model3 from '../assets/images/model3.svg'
import model4 from '../assets/images/model4.svg'
import model5 from '../assets/images/model5.svg'
import model6 from '../assets/images/model6.svg'
import FOGG from '../assets/images/JOJO.svg'
import Slider from 'react-slick'

const Rent = () => {
    const settings = {
        dots: false,           // مش هيتعرض نقاط التنقل
        infinite: true,        // تكرار الشرائح بشكل لانهائي
        speed: 1000,           // سرعة الانتقال (بطئ شوية)
        autoplay: true,        // التشغيل التلقائي
        autoplaySpeed: 3000,   // مدة ظهور كل شريحة قبل الانتقال
        slidesToShow: 1,       // عدد الشرائح المعروضة في نفس الوقت
        slidesToScroll: 1,     // عدد الشرائح اللي بتمررها في كل مرة
      };
      
    return (
        <React.Fragment>
        <div className={`container ${TOKYO.papa_Rent}`}>
                    <button className={`${TOKYO.HOWbtn}`}>HOW IT WORK</button>
<h3  className={`${TOKYO.TiTle}`}>Rent with following 3 working steps</h3>
<div className={`d-flex jc-center text-center m-auto row ${TOKYO.papa}`}>
<div className={`col-lg-4 col-sm-6 col-md-6 col-6 ${TOKYO.child} ${TOKYO.newClass}`}>
   <div className={TOKYO.OK}>
   <img src={icon1} alt="" />
    <h6>Choose location</h6>
    <p>Choose your location and find<br />the best car rental options available</p>
    
   </div>

</div>
<div className={`col-lg-4 col-sm-6 col-md-6 col-6 ${TOKYO.child} ${TOKYO.newClass}`}>
<div className={TOKYO.OK}>
<img src={icon2} alt="" />
    <h6>Pick-up date</h6>
    <p>Select your pick up date and<br />time to book your car</p>
</div>
</div>
<div className={`col-lg-4 col-sm-6 col-md-6 col-6 ${TOKYO.child} ${TOKYO.newClass3}`}>
<div className={TOKYO.OK}>
<img src={icon3} alt="" />
    <h6>Book your car</h6>
    <p>Book your car and we will deliver<br />it directly to you</p>
</div>
</div>




</div>
<div className={`${TOKYO.modelsSlider}`}>
    <div className={`row ${TOKYO.slidePAPA}`}>
    <Slider {...settings}>
    <div className={`col-lg-12 col-sm-12 col-12 ${TOKYO.slide}`}>
        <img src={FOGG} alt="Slider Image" />
      </div>
      <div className={`col-lg-12 col-sm-12 col-12 ${TOKYO.slide}`}>
        <img src={FOGG} alt="Slider Image" />
      </div>
      <div className={`col-lg-12 col-sm-12 col-12 ${TOKYO.slide}`}>
        <img src={FOGG} alt="Slider Image" />
      </div>
    </Slider>

    
    
     
      
    </div>

</div>


        </div>
        </React.Fragment>
    )
}

export default Rent