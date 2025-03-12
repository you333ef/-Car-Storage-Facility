import React from 'react';
import './footer.css'; // تأكد من مسار الاستيراد الصحيح
import 'bootstrap/dist/css/bootstrap.min.css';

// استيراد أيقونات من react-icons
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="footer-content"
      style={{
        backgroundColor: 'rgba(5, 28, 52, 1)',
        color: '#fff',
        padding: '40px 0'
      }}
    >
      <div className="container">
        {/* الصف الأول للمحتوى الأساسي */}
        {/*
          - gy-4: مسافة عمودية بين العناصر
          - text-center text-lg-start: النص في المنتصف للشاشات الصغيرة والمتوسطة
            وفي اليسار للشاشات الكبيرة
        */}
        <div className="row gy-4 text-center text-lg-start">
          {/* العمود الأول */}
          <div className="col-12 col-lg-3">
            <h5 className="mb-4">Rentcars</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2 d-flex justify-content-center justify-content-lg-start align-items-center">
                <FaMapMarkerAlt className="me-2" />
                25586th l, Glendale, Alaska, 99508, USA
              </li>
              <li className="mb-2 d-flex justify-content-center justify-content-lg-start align-items-center">
                <FaPhoneAlt className="me-2" />
                +1306-478-3723
              </li>
              <li className="mb-2 d-flex justify-content-center justify-content-lg-start align-items-center">
                <FaEnvelope className="me-2" />
                rentcars@gmail.com
              </li>
            </ul>
          </div>

          {/* Our Product */}
          <div className="col-12 col-lg-2">
            <h5 className="mb-4">Our Product</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">Career</li>
              <li className="mb-2">Car</li>
              <li className="mb-2">Packages</li>
              <li className="mb-2">Features</li>
              <li className="mb-2">Priceline</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-12 col-lg-2">
            <h5 className="mb-4">Resources</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">Download</li>
              <li className="mb-2">Help Centre</li>
              <li className="mb-2">Guides</li>
              <li className="mb-2">Partner Network</li>
              <li className="mb-2">Cruises</li>
              <li className="mb-2">Developer</li>
            </ul>
          </div>

          {/* About Rentcars */}
          <div className="col-12 col-lg-2">
            <h5 className="mb-4">About Rentcars</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">Why choose us</li>
              <li className="mb-2">Our Story</li>
              <li className="mb-2">Investor Relations</li>
              <li className="mb-2">Press Center</li>
              <li className="mb-2">Advertise</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-lg-3">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="#facebook" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#instagram" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="#linkedin" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* خط فاصل */}
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* الصف الثاني لحقوق الملكية */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; 2021 - Rentcars, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
