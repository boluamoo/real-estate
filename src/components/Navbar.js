import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className="navbar flexCenter paddings innerWidth">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/residencies">Residencies</Link>
        <Link to="/value">Our Value</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/getstarted">Get Started</Link>
        <Link to="/contact">
          <button className="button">
            <a href="nothing">Contact</a>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
