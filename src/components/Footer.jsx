import React from 'react'
import Logo2 from '../assets/logo2.png'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flex f-container justify-between">
        {/* LEFT SIDE */}
        <div className="flexColStart f-left gap-4">
          <img src={Logo2} alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place for them to live.
          </span>
        </div>
        {/* RIGHT SIDE */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145, New York, FL 4571</span>

          <div className="flexCenter f-menu gap-6 mt-6 font-medium">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
