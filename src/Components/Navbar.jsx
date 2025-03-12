import React from 'react'
import EBT from './navbar.module.css';
import LOGO from '../assets/images/Logo.svg'
const Navbar = () => {
  return (
    <React.Fragment >
<div className={`${EBT.navbarrr}`}>
  <nav className="navbar p-3 navbar-expand-lg navbar-light bg-light">
    <div className="container d-flex justify-content-between align-items-center w-100">
      <img src={LOGO} className={`navbar-brand ${EBT.Logo}`} alt="Logo" />

     
      <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarTogglerDemo01"
  aria-controls="navbarTogglerDemo01"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>


      <div className={`collapse navbar-collapse flex-grow-1 text-center ${EBT.TXT}`} id="navbarTogglerDemo01">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active"><a className="nav-link" href="#">Become a renter</a></li>
          <li className="nav-item active"><a className="nav-link" href="#">Rental deals</a></li>
          <li className="nav-item active"><a className="nav-link" href="#">How it work</a></li>
          <li className="nav-item active"><a className="nav-link" href="#">Why choose us</a></li>
        </ul>
      </div>

      <form className="d-none d-lg-block">
        <button className="btn" type="submit">Sign in</button>
        <button className={`btn ${EBT.BOOTN}`} type="submit">Sign in</button>
      </form>
    </div>
  </nav>
</div>








    </React.Fragment>
  )
}

export default Navbar