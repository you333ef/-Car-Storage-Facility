import React from 'react';
import SSTYLES from './download.module.css';

// استورد صورك هنا
import bg_down from '../assets/images/bg_Down.svg';
import mobile from '../assets/images/iPhone 14 Pro Space Black Mockup.svg';
import google from '../assets/images/Google_play.svg';
import iphone from '../assets/images/IPHONE.svg';

const Download = () => {
  return (
    <div className={`mt-5 ${SSTYLES.DOWN_SEC}`}>
      {/* عنصر الصورة للخلفية */}
      <img src={bg_down} alt="bg" className={SSTYLES.bgImage} />

      {/* يمكنك استخدام container من بوتستراب للتحكم في عرض المحتوى */}
      <div className={`container ${SSTYLES.DOWN_papa}`}>
        <div className="row align-items-center">
          {/* الجزء الأول: النصوص والأيقونات */}
          <div className={`col-lg-6 order-sm-2 order-2 order-lg-1 col-12 col-md-12 ${SSTYLES.PART1}`}>
            <div className={SSTYLES.rottary}>
              <h3 className=''>
                Download Rentcars<br/>App for <span>FREE</span>
              </h3>
              <p className=''>For faster, easier booking and exclusive deals.</p>
              <div className={` ${SSTYLES.ICOna}`}>
                <img src={iphone} alt="App Store" />
                <img src={google} alt="Google Play" />
              </div>
              <div className={` text-center m-auto ${SSTYLES.INPTS}`}>
                <input type="text" placeholder="Name"  />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email" />
               <div className={`  ${SSTYLES.SendBtn}`}>
               <button className={`  ${SSTYLES.Send}`}>Send</button>
               </div>
              </div>
             
            </div>
          </div>

          {/* الجزء الثاني: صورة الموبايل */}
          <div className={`col-lg-6 order-sm-1 order-1 order-lg-2  col-12 col-md-12 text-center ${SSTYLES.PART2}`}>
            <img src={mobile} alt="Phone Mockup" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
