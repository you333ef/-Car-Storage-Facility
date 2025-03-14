import React from 'react';
import stylesHead from './header.module.css';
import bg_HEADER from '../assets/images/bg_HEADER.svg';
import CAR_MAIN from '../assets/images/CAR_HEADER.svg';
import GooGle from '../assets/images/Google_play.svg';
import { motion } from "framer-motion";

import iphone from '../assets/images/IPHONE.svg';

const Header = () => {
  return (
    <React.Fragment>
      <div className={stylesHead.MAINHEADER}>
        <div className="container-fluid p-0">
          <div className={`row g-0 ${stylesHead.rowoow}`}> 
            <div className={`col-lg-6 col-md-12 col-sm-12  order-2 order-md-2 order-lg-1  d-flex flex-column justify-content-center ${stylesHead.lweft}`}>
              <div className={` ${stylesHead.KSARRRR}`}>
              <div className={`  ${stylesHead.nce}`}>
                <div className={`justify-content-start d-flex ${stylesHead.sure}`}>
                <h2 className='  '>Find, book and <br />rent a car<span className={`  ${stylesHead.Easily}`}>Easily</span> </h2>

                </div>
              <p className='justify-content-start d-flex' >Get a car wherever and whenever you<br />need it with your IOS and Android device.</p>
              </div>
                <div className={stylesHead.KSAR}>
                  <img src={GooGle} alt="Google Play" />
                  <img src={iphone} alt="iPhone" />
                </div>
              </div>
            </div>
            <div className={`col-lg-6 order-sm-1 order-md-1 order-lg-2 col-md-12 col-sm-12 d-flex justify-content-end  ${stylesHead.right} `}>
        <div className={stylesHead.CCLC}>
        <div className={stylesHead.collection}>
        <motion.img 
  src={CAR_MAIN} 
  alt="Car Main"
  className=""
  initial={{ opacity: 20, x: 300 }} 
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
/>

              </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
