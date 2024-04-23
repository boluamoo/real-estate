import React from 'react'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flex flex-col justify-center items-center inner-container gap-6 bg-[#4161df] p-8 rounded-lg border-solid border-[6px] border-[#5d77d6] text-center">
          <div
            className="primaryText"
            style={{ color: 'white', fontWeight: 600 }}
          >
            Get Started with Homyz
          </div>
          <div
            className="secondaryText"
            style={{ color: 'rgba(225, 225, 225, .587)' }}
          >
            Subscribe and find super attractive price quotes from us
            <br />
            Find your residence soon
          </div>
          <button
            className="button"
            style={{
              background: '#5a73d7',
              border: '2px solid white',
              borderRadius: '10px',
              boxShadow: '0px 23px 21px -8px rgba(136, 160, 255, 0.25)'
            }}
          >
            <a href="mailto:boluamoo58@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
