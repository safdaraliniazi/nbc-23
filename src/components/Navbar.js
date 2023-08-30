import React  from 'react'
import { Link } from 'react-router-dom'
import {useState } from 'react'
import classnames from 'classnames'
import AbstractDropdown from './AbstractDropdown'
const Navbar = () => {

 const [shrink , setShrink] = useState(false)

 const headerAnimation = () => {
    var scrollTop = window.scrollY;
    if ( scrollTop > 100 ) {	    
      setShrink(true)
    } else {
      setShrink(false)
    }
  }


  window.addEventListener('scroll' , headerAnimation)

  return (
    
    <>

  <header onScroll={() => {
    if (window.scrollY > 100){
      setShrink(true)
    } else {
      setShrink(false)
    }
  }}  id="header" className = {classnames({
    "header" : true,
    "fixed-top" : true,
    "header-shrink" : shrink
  })} >
  <div className="branding">
    <div className="container-fluid">
      <nav className="main-nav navbar navbar-expand-lg">
        <div className="site-logo">
          <Link className="scrollto" to="/">
            <img
              className="logo-icon"
              src="../images/NIT_Rourkela_Colour_Logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-btn order-lg-2">
          {/* <a
            className="btn btn-success"
            href="https://drive.google.com/drive/folders/1l6afBSTBTPa77MtzZyEul6jn2zc5j5PR" target="_blank"
          >
            Abstracts
          </a> */}
          <AbstractDropdown />
          
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
        </button>
        <div
          id="navigation"
          className="navbar-collapse collapse  justify-content-lg-end me-lg-3"
        >
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link scrollto">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link scrollto">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="/#thematic-areas">
                Thematic Areas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#schedule-section">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="/#tickets-section">
                Fees
              </a>
            </li>
            <li className="nav-item">
              <Link to="/publication" className="nav-link scrollto">
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollto" href="#organizing">
                Organizing Comittee
              </a>  
            </li>
          </ul>
          {/*//nav*/}
        </div>
        {/*//navabr-collapse*/}
      </nav>
      {/*//main-nav*/}
    </div>
    {/*//container*/}
  </div>
  {/*//branding*/}
</header>
{/*//header*/}
    
    

  
  
        
    </>
  )
}


export default Navbar