import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar flexCenter paddings innerWidth">
      <div className="leftSide">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="rightSide">
        <a href="/residencies">Residencies</a>
        <a href="/value">Our Value</a>
        <a href="/contact">Contact</a>
        <a href="/getstarted">Get Started</a>
        <a href="/contact">
          <button className="button">
            <a href="nothing">Contact</a>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
