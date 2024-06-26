import React from 'react'
import heroImage from '../assets/hero-image.png'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import '../styles/Hero.css'

function Hero() {
  return (
    <div className="hero ">
      <section className="hero-wrapper overflow-x-clip">
        <div className="absolute w-1/5 h-1/3 bg-cyan-50 top-0 left-0 blur-[100px] rounded-full"></div>
        <div className="paddings innerWidth hero-container flexCenter">
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <h1 className="fade-up-element">
                Discover <br />
                Most Suitable <br />
                Property
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Find a variety of properties that suits you easily
              </span>
              <span className="secondaryText">
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" className="text-black" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Awards</span>
              </div>
            </div>
          </div>
          <div className="hero-right flexCenter">
            <div className="image-container">
              <img src={heroImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
