import React from 'react'
import  TOTO from './offer.module.css'
import market1 from '../assets/images/icon _market1.svg'
import market2 from '../assets/images/icon _market2.svg'
import market3 from '../assets/images/icon _market3.svg'
import market4 from '../assets/images/icon _market4.svg'
import carNow from '../assets/images/car-offer.svg'
import bg_offer from '../assets/images/bg-offer.svg'
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <div className='mt-5'>
      <div className={` ${TOTO.offer}`}> 
        <div className={`row  ${TOTO.AcparHom}`}>
          
          <div className={`col-lg-6 col-md-12 col-sm-12  ${TOTO.SECCAR}`}>
          <div className={TOTO.imageS}>
                <motion.img 
                src={carNow} 
                alt="Car Main"
                className={TOTO.MAAIN}
                initial={{ opacity: 0, x: -300 }} 
                animate={{ opacity: 1, x: 0 }}     
                transition={{ duration: 2.5, ease: "easeOut" }}
              />
          </div>
          </div>    
          <div className={`col-lg-6 col-sm-12 ${TOTO.left1}`}>
            <button className={`${TOTO.HOWbtn}`}>WHY CHOOSE US</button>
            <h2>We offer the best experience with<br /> our rental deals</h2>  
            <div className={TOTO.Round}>
              <img src={market1} alt="" />
              <div>
                <h6>Best price guaranteed</h6>
                <p>
                  Find a lower price? We’ll refund you 100% <br />
                  of the difference.
                </p>
              </div>
            </div>
            <div className={TOTO.Round}>
              <img src={market2} alt="" />
              <div>
                <h6>Experience driver</h6>
                <p>
                  Don't have a driver? Don't worry, we have many <br />
                  experienced driver for you.
                </p>
              </div>
            </div>
            <div className={TOTO.Round}>
              <img src={market3} alt="" />
              <div>
                <h6>24 hour car delivery</h6>
                <p>
                  Book your car anytime and we will deliver it <br />
                  directly to you.
                </p>
              </div>
            </div>
            <div className={TOTO.Round}>
              <img src={market4} alt="" />
              <div>
                <h6>24/7 technical support</h6>
                <p>
                  Have a question? Contact Rentcars support any <br />
                  time when you have problem.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Offer
